from django.urls import path
from .views import CreateView,UpdateView,levelcreate,Updatelevel,createtask

urlpatterns[
    path('create/',CreateView.as_view()),
path('update/<int:id>/',UpdateView.as_view()),
path('createlevel/',levelcreate.as_view()),
path('updatelevel/<int:id>/',Updatelevel.as_view()),
path('createtask/',createtask.as_view()),
]



