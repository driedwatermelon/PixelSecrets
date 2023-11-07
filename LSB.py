import cv2
import numpy as np


#input text
input_text = "very secret text yes"

# Open the input image
input_image = cv2.imread("filmscan.jpg")



def to_bin(data):
    """Convert `data` to binary format as string"""
    if isinstance(data, str):
        return ''.join([ format(ord(i), "08b") for i in data ])
    elif isinstance(data, bytes):
        return ''.join([ format(i, "08b") for i in data ])
    elif isinstance(data, np.ndarray):
        return [ format(i, "08b") for i in data ]
    elif isinstance(data, int) or isinstance(data, np.uint8):
        return format(data, "08b")
    else:
        raise TypeError("Type not supported.")
        
        

def encode(input_image, input_text):

	img = input_image.copy()

	binary_text = to_bin(input_text)
	data_len = len(binary_text)
	data_index = 0

	#image dimensions
	height, width = img.shape[:2]


	# space available in the file
	x_bytes = img.shape[0] * img.shape[1] * 3 // 8

	# check if the text is bigger than the space available in the file
	if len(text) > (x_bytes):
		raise ValueError("not enough space in image")

	#loops through and overwrites every pixel
	for x in range(0,height,1):
		for y in range(0,width,1):
	
			r, g, b = to_bin(y)

			if data_index < data_len:
				# least significant red pixel bit
				y[0] = int(r[:-1] + binary_text[data_index], 2)
				data_index += 1
			if data_index < data_len:
				# least significant green pixel bit
				y[1] = int(g[:-1] + binary_text[data_index], 2)
				data_index += 1
			if data_index < data_len:
				# least significant blue pixel bit
				y[2] = int(b[:-1] + binary_text[data_index], 2)
				data_index += 1

            	# if data is encoded, just break out of the loop
			if data_index >= data_len:
				break
    return img



def decode(encoded_image):
	image = cv2.imread(encoded_image)
	decoded_string = ""
	



encode(input_image)



