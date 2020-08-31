from django.shortcuts import render, HttpResponse
from uims_api import SessionUIMS
from django.http import JsonResponse
from django.contrib import sessions
import os

# Create your views here.
def index(request):
    user = SessionUIMS(os.getenv('UIMS_UID'), os.getenv('UIMS_PASSWORD'))
    return JsonResponse(user.timetable)
