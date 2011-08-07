import cgi
import os
from google.appengine.ext.webapp import template
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import db
from google.appengine.api import urlfetch
from google.appengine.ext.webapp import util
from django.utils import simplejson
import base64
import datetime
import re


class Request(db.Model):
	url = db.StringProperty()
	image = db.BlobProperty()
	contenttype = db.StringProperty()
	details = db.StringProperty(multiline=True)
	date = db.DateTimeProperty(auto_now_add=True)
	message = db.StringProperty(multiline=True)
	orgkey = db.StringProperty()
	def imagesrc(self):
		return "/shots/%s" % (self.key()) 
	
class BaseHandler(webapp.RequestHandler):
	def setexpires(self, numdays = 1):
		expires_date = datetime.datetime.utcnow() + datetime.timedelta(numdays)
		expires_str = expires_date.strftime("%d %b %Y %H:%M:%S GMT")
		self.response.headers.add_header("Expires", expires_str)
	
	def userstuff(self):
		self.viewdata = { };
		
		if users.get_current_user():
			self.viewdata["loginurl"] = users.create_logout_url(self.request.uri)
			self.viewdata["logintext"] = 'Logout'
			self.viewdata["isloggedin"] = True
		else:
			self.viewdata["loginurl"] = users.create_login_url(self.request.uri)
			self.viewdata["logintext"] = 'Login'
			self.viewdata["isloggedin"] = False
	
	def initialize(self, request, response):
		super(BaseHandler, self).initialize(request, response)
		self.userstuff()


class MainHandler(BaseHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'index.html')
        self.response.out.write(template.render(path, self.viewdata))


class Fetch(BaseHandler):
	def get(self):
		url = self.request.get('url')


def main():
    application = webapp.WSGIApplication([('/', MainHandler)],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
