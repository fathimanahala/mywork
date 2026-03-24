from django.contrib import admin
from .models import Course,Task,Level
# Register your models here.
admin.site.register(Course)
admin.site.register(Level)
admin.site.register(Task)