from django.urls import path
from django.shortcuts import redirect

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("encode/", views.encode, name="encode"),
    path("decode/", views.decode, name="decode"),
    path("about/", views.about, name="about"),
]