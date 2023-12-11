from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Vehicle
from .serializers import VehicleSerializer, UserSerializer
from rest_framework.authtoken.models import Token
from django.middleware import csrf


class CsrfView(APIView):
    def get(self, request):
        return Response(
            data={"csrf": csrf.get_token(request)},
            status=200,
        )
class VehicleListCreateAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        vehicles = Vehicle.objects.all()
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(serializer.data, status=201)
            except Exception as e:
                return Response({'error': str(e)}, status=400)
        return Response(serializer.errors, status=400)

class VehicleRetrieveUpdateDestroyAPIView(APIView):
    permission_classes = [AllowAny]

    def get_object(self, pk):
        try:
            return Vehicle.objects.get(pk=pk)
        except Vehicle.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        vehicle = self.get_object(pk)
        serializer = VehicleSerializer(vehicle)
        return Response(serializer.data)

    def put(self, request, pk):
        vehicle = self.get_object(pk)
        serializer = VehicleSerializer(vehicle, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        vehicle = self.get_object(pk)
        vehicle.delete()
        return Response(status=204)

class UsersList(APIView):
    def get(self, request):
        users = User.objects.filter(is_staff=False)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class UserRegistrationAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password or not email:
            return Response({'error': 'Please provide username, password, and email.'}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists.'}, status=400)

        user = User.objects.create_user(username=username, password=password, email=email)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'message': 'User registered successfully.', 'token': token.key}, status=201)


class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Please provide username and password.'}, status=400)

        user = authenticate(username=username, password=password)

        if not user:
            return Response({'error': 'Invalid username or password.'}, status=400)

        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'message': 'User logged in successfully.', 'token': token.key}, status=200)
class UserLogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=200)

class UserVehiclesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get the user token from headers
        token_key = request.headers.get('Authorization').split(' ')[1]
       
        # Retrieve the user associated with the token
        try:
            token = Token.objects.get(key=token_key)
            user = token.user
            print(user)
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token.'}, status=400)

        # Get the vehicles associated with the user
        vehicles = Vehicle.objects.filter(user=user)
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)
