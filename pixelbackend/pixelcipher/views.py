from os.path import splitext

from django.http import HttpResponse
from django.http import FileResponse
from django.template import loader
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from cv2 import imwrite

from .models import PixelSecret
from .LSB import encode_image, decode_image


def index(request):
    return render(request, "index.html")


@csrf_exempt
def encode(request):
    if request.method == "POST":
        text = request.POST["text"]
        img = request.FILES["file"]
        pwd = request.POST["password"]

        pixelsecret = PixelSecret(secret_text=text, carrier_image=img, password=pwd)
        pixelsecret.save()

        encoded_img_arr = encode_image(pixelsecret.carrier_image.path, text)
        imwrite(pixelsecret.carrier_image.path, encoded_img_arr)
        
        file_type = splitext(pixelsecret.carrier_image.path)[1] # set file_type to carrier_image.path ending ex. '.png'
        img_type = file_type[1:] # Remove leading dot from file_type ex. '.png' --> 'png'
        img_type = "image/" + img_type

        try:
            with open(pixelsecret.carrier_image.path, "rb") as f:
                response = HttpResponse(
                    f.read(),
                    headers={
                        "Content-Type": img_type,
                        "Content-Disposition": "attachment; filename=\"encoded_image" + file_type + "\"",
                    }
                )
    
        except IOError:
            print("An IOError occured.")
            response = HttpResponse("An IOError occured.")

        pixelsecret.delete()
        return response
    else:
        template = loader.get_template("pixelcipher/encode.html")
        context = {}
        return HttpResponse(template.render(context, request))


def decode(request):
    if request.method == "POST":
        text = "placeholder"
        img = request.FILES["carrier_image"]
        pwd = request.POST["password"]

        pixelsecret = PixelSecret(secret_text=text, carrier_image=img, password=pwd)
        pixelsecret.save()

        decoded_text = decode_image(pixelsecret.carrier_image.path)
        decoded_text = decoded_text.strip()
        print(decoded_text)

        pixelsecret.delete()

        context = {'decoded_text': decoded_text}
    else:
        context = {'decoded_text': ""}

    template = loader.get_template("pixelcipher/decode.html")
    return HttpResponse(template.render(context, request))


def about(request):
    return HttpResponse("Hello, world. You're at the about page.")

