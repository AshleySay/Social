from django.contrib import admin
from .models import User

class backendAdmin(admin.ModelAdmin):
    list_display = ('id', 'password', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined')


# Register your models here.
admin.site.register(User, backendAdmin) # add this

