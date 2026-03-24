from django.db import models

# Create your models here.
class Course(models.Model):
    name=models.CharField(max_length=15)
    teacher=models.CharField(max_length=20)
    duration=models.IntegerField()

class Level(models.Model):
    Course=models.ForeignKey()
    levels=models.IntegerField()

class Task(models.Model):
    Level=models.ForeignKey()
    task=models.CharField(max_length=20)    
