from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path("csrf/", CsrfView.as_view(), name="csrf"),
    path('vehicles/', VehicleListCreateAPIView.as_view(), name='create-vehicles'),
    path('vehicles/update-vehicles/<int:pk>/', VehicleRetrieveUpdateDestroyAPIView.as_view(), name='edit-vehicles'),
    path('users/', UsersList.as_view(), name='users'),
    path('users/register', UserRegistrationAPIView.as_view(), name='user-register'),
    path('users/login', UserLoginAPIView.as_view(), name='user-login'),
    path('users/logout', UserLogoutAPIView.as_view(), name='user-logout'),
    path('users/vehicle_list', UserVehiclesView.as_view(), name='UserVehiclesView'),
]
