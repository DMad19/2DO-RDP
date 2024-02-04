from django.urls import path
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TaskSerializer
from .models import Task
from rest_framework import status

class TasksView(APIView):
    def get(self, request, *args, **kwargs):
        '''
            if id not provided -- get all tasks
            if id provided -- get specific task with id
        '''
        id = kwargs.get('id')
        if id is not None:
            data = Task.objects.get(id=id)
            serializer = TaskSerializer(data)
        else:
            data = Task.objects.all()
            serializer = TaskSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        '''
            requires mandatory fields except create_at and completion_status
        '''
        data = request.data
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'message':'Invalid request data'}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, *args, **kwargs):
        '''
            requires id to update specific task
        '''
        id = self.kwargs.get('id')
        if id is None:
            return Response({'message': 'No task selected to update'}, status=status.HTTP_404_NOT_FOUND)
        try:
            task_object = Task.objects.get(id=id)
        except Task.DoesNotExist as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = TaskSerializer(task_object, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'message': str(serializer.errors)}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        '''
            if id provided -- deletes specific task
            if id not provided -- deletes all tasks
        '''
        id = self.kwargs.get('id')
        if id is None:
            task_objects = Task.objects.all()
            task_objects.delete()
            return Response({'message': 'All tasks deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

        try:
            task_object = Task.objects.get(id=id)
        except Task.DoesNotExist as e:
            return Response({'message': 'Task not found to delete'}, status=status.HTTP_404_NOT_FOUND)
        
        task_object.delete()
        return Response({'message':'Deleted successfully'}, status=status.HTTP_204_NO_CONTENT)