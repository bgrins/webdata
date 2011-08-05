from django.conf.urls.defaults import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('frontend.views',
    (r'^$', 'index'),
    (r'^view/(?P<request_id>\d+)/$', 'detail'),
    (r'^view/', 'detail1')
)

urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)