from cryptography.fernet import Fernet, InvalidToken
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64

def generate_key(password, salt=b'salt', iterations=100000):
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=iterations,
        backend=default_backend()
    )
    key = kdf.derive(password.encode())
    return base64.urlsafe_b64encode(key)

def encrypt_message(message, key):
    cipher = Fernet(key)
    encrypted_bytes = cipher.encrypt(message.encode())
    encrypted_str = base64.urlsafe_b64encode(encrypted_bytes).decode('utf-8')
    return encrypted_str

def decrypt_message(encrypted_message, key):
    try:
        cipher = Fernet(key)
        encrypted_bytes = base64.urlsafe_b64decode(encrypted_message.encode('utf-8'))
        decrypted_message = cipher.decrypt(encrypted_bytes).decode('utf-8')
    except InvalidToken:
        decrypted_message = encrypted_message
    return decrypted_message