from django.db import models
import datetime

class Request(models.Model):
    url = models.CharField(max_length=255)
    pub_date = models.DateTimeField('date published')
    har = models.TextField(null=True)
    def __unicode__(self):
        return self.url + ": " + self.har
    def was_published_today(self):
        return self.pub_date.date() == datetime.date.today()
	was_published_today.short_description = 'Published today?'
