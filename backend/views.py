from django.shortcuts import render
from rest_framework import viewsets
from .serializers import backendSerializers
from .models import User
# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = backendSerializers
    queryset = User.objects.all()


