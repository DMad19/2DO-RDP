from django.urls import path
from .views import TasksView
from .views import TaskStatusUpdater

urlpatterns = [
    path('tasks/', TasksView.as_view()),
    path('tasks/<id>', TasksView.as_view()),
    path('tasks/<id>/update-status', TaskStatusUpdater.as_view())
]