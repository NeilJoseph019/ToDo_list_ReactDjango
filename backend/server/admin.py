from django.contrib import admin
from . import models

admin.site.register(models.Todo)
admin.site.register(models.Body_description)
admin.site.register(models.Body_checklist)
admin.site.register(models.Checklist_body)
