from Crypto.Random import get_random_bytes
from Crypto.Protocol.KDF import PBKDF2
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

password = input("Enter password: ")

def key(password):

	salt = b'O\xb4\x92G\xa9\x95D\x04{\xcb\xb4WpQ4#_\xe0\x8e\xf1f\xf5j"uw$:\x85\xa1\x07y'
	#salt = b'salt'
	key = PBKDF2(password, salt, dkLen=32)
	return key

def decrypt(key):

	with open("encrypted.bin", "rb") as f:
		iv = f.read(16)
		message = f.read()
		
		cipher = AES.new(key, AES.MODE_CBC, iv = iv)
		original = unpad(cipher.decrypt(message), AES.block_size)
		print(original)
		
		
decrypt(key(password))
	
