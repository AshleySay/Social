from rest_framework import serializers
from .models import User

class backendSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined')

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user_obj = User(username=username,
                            email=email)
        user_obj.set_password(password)
        user_obj.save()
        return validated_data