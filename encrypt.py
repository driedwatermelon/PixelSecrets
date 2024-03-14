from Crypto.Random import get_random_bytes
from Crypto.Protocol.KDF import PBKDF2
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

message = input("Enter some text: ").encode('utf-8')
password = input("Enter a password: ")

def key(password):

	salt = b'O\xb4\x92G\xa9\x95D\x04{\xcb\xb4WpQ4#_\xe0\x8e\xf1f\xf5j"uw$:\x85\xa1\x07y'
	#salt = b'salt'
	key = PBKDF2(password, salt, dkLen=32)
	return key

def encrypt(message,key):

	cipher = AES.new(key, AES.MODE_CBC)
	ciphered_data = cipher.encrypt(pad(message,AES.block_size))
	
	encrypted_data = cipher.iv + ciphered_data
	
	print(cipher.iv)
	print(encrypted_data)
	return(encrypted_data)
		
def decrypt(key,encrypted_data):

	iv = encrypted_data[:16]
	message = encrypted_data[16:]
		
	cipher = AES.new(key, AES.MODE_CBC, iv = iv)
	original = unpad(cipher.decrypt(message), AES.block_size)
	
	print(original)
	return(original)
	
	
msg = encrypt(message,key(password))
decrypt(key(password),msg)
