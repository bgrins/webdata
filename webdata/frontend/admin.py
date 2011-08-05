from frontend.models import Request
from django.contrib import admin


class RequestAdmin(admin.ModelAdmin):
    # ...
    list_display = ('url', 'pub_date', 'har', 'was_published_today')


admin.site.register(Request, RequestAdmin)