from django.urls import path
from .views import TasksView

urlpatterns = [
    path('tasks/', TasksView.as_view()),
    path('tasks/<id>', TasksView.as_view())
]