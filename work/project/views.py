from django.shortcuts import render
from .models import Course,Level,Task
from .Serializers import Courseserializers,LevelSerializers,Taskserializers

class CreateView(ApiView):
    def post(self,request):
        serializers=Courseserializers(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return response(serializers.data)
        
    def get(request):
        courses=Course.objects.all()
        serializers=Courseserializers(courses,many=True)
        return response(serializers.data)
    
class UpdateView(ApiView):
    def update(self,request,id):
        courses=get_object or 404(Course,id=id)
        serializers=Courseserializers(courses,data=request.data)
        if serializers.is_valid():
            serializers.save()
        return response(serializers.data)

    def delete(self,request,id):
        courses=get_object or 404(Course,id=id)
        courses.delete()

class levelcreate(ApiView):
    def post(self,request):
        serializers=LevelSerializers(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return response(serializers.data)
        
    def get(request):
        levels=Level.object.all()
        serializers=LevelSerializers(levels,many=True)
        return response(serializers.data)
    
class Updatelevel(ApiView):
    def update(self,request,id):
        levels=get_object or 404(Level,id=id)
        serializers=LevelSerializers(levels,data=request.data)  
        if serializers.is_valid():
            serializers.save()
            return response(serializers.data)
        
    def delete(self,request,id):
        levels=get_object or 404(Level,id=id)
        levels.delete()

class createtask(ApiView):
    def post(self,request):
        serializers=Taskserializers(data=request.data)
        serializers.is_valid()
        serializers.save()
        return response(serializers.data)  
        
    def get(request):
        tasks=Task.object.all()
        serializers=Taskserializers(tasks,many=True)
        





    




