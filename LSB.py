import cv2
import numpy as np
import os
import re


#input text
input_text = "you found the secret message! congrats "

# Open the input image
#input_image = cv2.imread("randomimage.jpg")
input_image = cv2.imread("blue.png")


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

	binary_text = to_bin(input_text) #secret text in binary
	data_len = len(binary_text) #lenght of secret message in binary 
	data_index = 0

	#image dimensions
	height, width = img.shape[:2]

	# space available in the file
	x_bytes = img.shape[0] * img.shape[1] * 3 // 8

	# check if the text is bigger than the space available in the file
	if (data_len) > (x_bytes):
		raise ValueError("not enough space in image")

	#loops through and overwrites every pixel
	for x in range(0,height,1):
		for y in range(0,width,1):
		
			r, g, b = to_bin(img[x,y])
			
			
			if data_index < data_len:
				# least significant red pixel bit
				img[x,y][0] = int(r[:-1] + binary_text[data_index], 2)
				data_index += 1
			if data_index < data_len:
				# least significant green pixel bit
				img[x,y][1] = int(g[:-1] + binary_text[data_index], 2)
				data_index += 1
			if data_index < data_len:
				# least significant blue pixel bit
				img[x,y][2] = int(b[:-1] + binary_text[data_index], 2)
				data_index += 1

            	# if data is encoded, just break out of the loop
			if data_index >= data_len:
				break
	
	# Display the result image
	#cv2.imshow("untouched", input_image)
	#cv2.imshow("Encoded", img)

	# Wait for a key press and close the window when a key is pressed
	#cv2.waitKey(0)
	#cv2.destroyAllWindows()
		
	return(img)



def decode(encoded_image):

	decoded_binary= ""
	
	#image dimensions
	height, width = encoded_image.shape[:2]

	#loops through and places the binary values of every pixel into string
	for x in range(0,height,1):
		for y in range(0,width,1):
			r, g, b = to_bin(encoded_image[x,y])
			decoded_binary += r[-1]
			decoded_binary += g[-1]
			decoded_binary += b[-1]
			
	#splits data into segments of 8
	bytes = []
	for i in range (0,len(decoded_binary),8):
		bytes.append(decoded_binary[i: i+8])
		
	#for loop for translating the binary data into text
	decoded_text = ""
	for byte in bytes:
		decoded_text += chr(int(byte,2))
	
	
	#english_words = re.findall(r'\b[a-zA-Z]+\b', decoded_text)
	#ascii_letters_and_spaces = ''.join(char for char in decoded_text if char.isascii() and (char.isalpha() or char.isspace()))
	
	#print(english_words)
	#print(ascii_letters_and_spaces)
	print(decoded_text)
		

encoded_img = encode(input_image,input_text)
decode(encoded_img)



