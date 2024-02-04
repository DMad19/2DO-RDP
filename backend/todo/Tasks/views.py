from django.urls import path
from django.http import JsonResponse

def index(request):
    return JsonResponse({
    "name": "John Doe",
    "age": 30,
    "is_student": False,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
    },
    "hobbies": ["reading", "traveling", "coding"],
    "scores": {
        "math": 95,
        "english": 88,
        "science": 92
    }
}
)