from django.urls import path
from .views import login_view, protected_view

urlpatterns = [
    path('login/', login_view),
    path('protegido/', protected_view),
]
