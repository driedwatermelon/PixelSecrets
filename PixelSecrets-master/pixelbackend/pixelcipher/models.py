from django.db import models

class PixelSecret(models.Model):
    secret_text = models.TextField()
    carrier_image = models.ImageField(upload_to="images")
    password = models.CharField(max_length=255)

    def delete(self, *args, **kwargs):
        storage, path = self.carrier_image.storage, self.carrier_image.path

        # Delete the model
        super(PixelSecret, self).delete(*args, **kwargs)

        # Delete the file afterwards
        storage.delete(path)