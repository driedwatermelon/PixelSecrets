def encode_image(img,text): #Replaces or adds user input after JPEG file structure
		
	with open(img, 'rb') as f: #identifies the end of the file
		data = f.read()
		index = data.find(b'\xff\xd9')
		image = data[:index+2]
		
	with open(img, 'wb') as f:
		f.write(image) #this discards any data present after JPEG EOF
		f.seek(0, 2)  # move file pointer to 0 bytes from the end of the file
		f.write(bytes(text, 'ascii')) # Writes the data to the file

def decode_image(img): #this function is used to read the data after JPEG structure
	
	with open(img, 'rb') as file:
		data = file.read()
		index = data.find(b'\xff\xd9') 
		print(data[index+2:].decode('utf-8')) 
		
user_input = input("Enter some text: ")
encode_image("blu.jpg",user_input)
decode_image("blu.jpg")


