import requests
import os

url = 'http://127.0.0.1:5000'

if not os.getenv('UIMS_UID'):
    raise RuntimeError('UIMS_UID not set')
if not os.getenv('UIMS_PASSWORD'):
    raise RuntimeError('UIMS_PASSWORD not set')

response = requests.post(
    f'{url}/api/timetable', {'uid': os.getenv('UIMS_UID'), 'password': os.getenv('UIMS_PASSWORD')})
print(response.text)
