from .Serializers import Serializers
from .models import Course,Level,Task

class Courseserializers(Serializers.modelserializers):
    class meta:
        model=Course
        feild=all

class LevelSerializers(Serializers.modelserializers):
    class meta:
        model=Level
        feild=all

class Taskserializers(Serializers.modelserializers):
    class meta:
        model=Task
        feild=all        