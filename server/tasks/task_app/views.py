from django.shortcuts import render
from .serializers import TaskSerializer
from .models import Task
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET','POST'])
def task_list(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            task = serializer.save()
            response_data = {
                'message': 'Task created successfully',
                'data':serializer.data,
            }
            return Response(response_data,status=201)
        return Response(serializer.errors, status=400)
    


