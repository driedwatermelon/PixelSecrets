from Crypto.Random import get_random_bytes
from Crypto.Protocol.KDF import PBKDF2
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
 	

#AES 256 symetric encryption

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

	with open("encrypted.bin","wb") as f:
		f.write(cipher.iv)
		f.write(ciphered_data)
		print(ciphered_data)

encrypt(message,key(password))

