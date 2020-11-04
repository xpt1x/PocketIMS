import requests
import os

urls = ['http://127.0.0.1:5000', 'http://143.110.240.76:5000/']

if not os.getenv('UIMS_UID'):
    raise RuntimeError('UIMS_UID not set')
if not os.getenv('UIMS_PASSWORD'):
    raise RuntimeError('UIMS_PASSWORD not set')

response = requests.post(
    f'{urls[1]}/api/timetable', {'uid': os.getenv('UIMS_UID'), 'password': os.getenv('UIMS_PASSWORD')})
print(response.text)
