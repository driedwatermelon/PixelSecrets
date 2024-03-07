from os.path import splitext

from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.http import FileResponse
from django.template import loader
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache

import cv2

from .models import PixelSecret
from .LSB import encode_image, decode_image

import numpy as np


def index(request):
    return render(request, "index.html")


@csrf_exempt
@never_cache
def encode(request):
    if request.method == "POST":
        text = request.POST["text"]
        img_file = request.FILES["file"]
        img = img_file.read()
        pwd = request.POST["password"]

        #file_extension = "." + img_file.name.split(".")[-1]

        input_image = cv2.imdecode(np.frombuffer(img, np.uint8), cv2.IMREAD_COLOR)

        encoded_img_arr = encode_image(input_image, text)
        ret, encoded_image = cv2.imencode(".png", encoded_img_arr, [cv2.IMWRITE_JPEG_QUALITY, 100])
        if not ret:
            return HttpResponseBadRequest("Error encoding image.")

        image_bytes = encoded_image.tobytes()

        response = HttpResponse(image_bytes, content_type = "image/png")
        response["Content-Encoding"] = "identity"
        return response
    else:
        print(request)
        return redirect("index")


@csrf_exempt
@never_cache
def decode(request):
    if request.method == "POST":
        img_file = request.FILES["file"]
        img = img_file.read()
        pwd = request.POST["password"]

        file_extension = "." + img_file.name.split(".")[-1]

        input_image = cv2.imdecode(np.frombuffer(img, np.uint8), cv2.IMREAD_UNCHANGED)

        decoded_text = decode_image(input_image)
        decoded_text = decoded_text.strip()

        return HttpResponse(decoded_text)

    else:
        return redirect("index")


def about(request):
   return redirect("index")

