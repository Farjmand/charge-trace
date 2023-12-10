from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Vehicle

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['id', 'user' , 'company', 'model', 'year', 'charging_start_time', 'charging_end_time', 'created_at']