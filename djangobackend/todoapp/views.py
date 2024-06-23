from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import Todo
from .serializers import TodoSerializer,UserSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class =  TodoSerializer
    authentication_classes = (TokenAuthentication,)


# @api_view(["GET", "POST"])
# def todo_list(request):
#     if request.method ==  "GET":
#         todos = Todo.objects.all()
#         serializer = TodoSerializer(todos, many=True)
#         return Response(serializer.data)
    
#     elif request.method == "POST":
#         serializer = TodoSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(["GET", "PATCH", "PUT", "DELETE"])
# def todo_detail(request, pk):
#     todo = get_object_or_404(Todo, id=pk)
    
#     if request.method == 'GET':
#         serializer = TodoSerializer(todo)
#         return Response(serializer.data)
    
#     elif request.method == 'PATCH':
#         serializer = TodoSerializer(todo, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         todo.delete()
#         return Response(status = status.HTTP_204_NO_CONTENT)
    