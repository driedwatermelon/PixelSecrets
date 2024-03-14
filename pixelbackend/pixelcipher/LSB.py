import cv2
import numpy as np

def to_bin(data):	#Converts data to binary format as string 
    if isinstance(data, str):
        return ''.join([ format(ord(i), "08b") for i in data ])
    elif isinstance(data, bytes):
        return ''.join([ format(i, "08b") for i in data ])
    elif isinstance(data, np.ndarray):
        return [ format(i, "08b") for i in data ]
    elif isinstance(data, int) or isinstance(data, np.uint8):
        return format(data, "08b")

             
def bin2String(s): 	#converts binary values to a string
    return ''.join(chr(int(s[i*8:i*8+8],2)) for i in range(len(s)//8))
        

def even_odd(integer, binary): # changes the integer to be odd or even based on binary input
	result = integer
	if (binary == 1 and not integer % 2):
		result += 1
	if (binary == 0 and integer % 2):
		result += 1	
	return result
	

def encode_image(input_image, input_text):
	#input_image = cv2.imread(input_image)
	img = input_image.copy()
	binary_text = to_bin(input_text+ "++") #secret text in binary
	data_len = len(binary_text) #lenght of secret message in binary 	
	height, width = img.shape[:2]	#image dimensions
	#x_bytes = img.shape[0] * img.shape[1] * 3 // 8 # space available in the file

	# check if the text is bigger than the space available in the file
	#if (data_len) > (x_bytes):
	#	raise ValueError("not enough space in image")

	data_index = 0
	for x in range(height):	#loops through and overwrites every pixel
		for y in range(width):
			if data_index < data_len:	# least significant red pixel bit
				img[x,y][0] = even_odd(int(input_image[x,y][0]),int(binary_text[data_index]))
				data_index += 1
			if data_index < data_len:	# least significant green pixel bit
				img[x,y][1] = even_odd(int(input_image[x,y][1]),int(binary_text[data_index]))
				data_index += 1
			if data_index < data_len:	# least significant blue pixel bit
				img[x,y][2] = even_odd(int(input_image[x,y][2]),int(binary_text[data_index]))
				data_index += 1
			if data_index >= data_len:	# if all data is encoded, break 
				break
			if (binary_text[data_index:data_index+16] == "0010101100101011"):# if stopper value is reached, break
				break
	
	return(img)


def decode_image(encoded_image):
	#encoded_image = cv2.imread(encoded_image)
	height, width = encoded_image.shape[:2]#image dimensions

	decoded_binary= ""
	for x in range(0,height,1):#loops through and places the binary values of every pixel into string
		for y in range(0,width,1):
			r, g, b = to_bin(encoded_image[x,y])
			decoded_binary += r[-1]
			decoded_binary += g[-1]
			decoded_binary += b[-1]
		
	bytes = []
	for i in range (0,len(decoded_binary),8):	#splits data into segments of 8
		bytes.append(decoded_binary[i: i+8])
		
	decoded_text = ""
	for byte in bytes: #loop for translating the binary data into text
		decoded_text += chr(int(byte,2))
		if decoded_text[-2:] == "++":		#if stopper is found
			decoded_text = decoded_text[:-2]
			break

	return decoded_text
		