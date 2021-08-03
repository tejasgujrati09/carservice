from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=30, blank=False, default='')
    username = models.CharField(max_length=20,blank=False, default='')
    email = models.CharField(max_length=100,blank=False, default='')
    phone = models.CharField(max_length=20,blank=False, default='')
    address = models.CharField(max_length=200,blank=False, default='')

class Meta:
    db_table = 'customer'

    
