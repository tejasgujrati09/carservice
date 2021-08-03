from Myapp.models import Customer
from rest_framework import serializers 
from Myapp.models import Customer
 
 
class CustomerSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Customer
        fields = (
                  'name',
                  'username',
                  'email',
                  'phone',
                  'address')
