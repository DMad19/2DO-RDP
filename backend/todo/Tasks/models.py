from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=150)

    PRIORITIES = [('LOW', 'LOW'), ('MEDIUM', 'MEDIUM'), ('HIGH', 'HIGH')]
    priority = models.CharField(max_length=6, choices=PRIORITIES)
    completion_status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)