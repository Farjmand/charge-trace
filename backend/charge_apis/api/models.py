from django.db import models
from django.contrib.auth.models import User

class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    charging_start_time = models.TimeField()
    charging_end_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)