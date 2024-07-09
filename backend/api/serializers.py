from rest_framework import serializers
from .models import *
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields =('name','start_date','end_date','comments','status')
        

    name=models.CharField(unique=True,max_length=100)
    start_date =models.DateField()
    end_date =models.DateField()
    comments=models.CharField(max_length=500,blank=True,null=True)
    status=models.CharField(max_length=100)