from flask import Flask, request, jsonify
from flask_cors import CORS
from uims_api import SessionUIMS
from uims_api.exceptions import IncorrectCredentialsError, UIMSInternalError

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'OK!'


@app.route('/api/signin', methods=['POST'])
def signin():

    if not request.form.get('uid'):
        return jsonify({'error': 'UID not provided'})
    if not request.form.get('password'):
        return jsonify({'error': 'Password not provided'})

    try:
        SessionUIMS(request.form.get('uid'), request.form.get('password'))
    except Exception as e:
        if e.__class__ == IncorrectCredentialsError:
            return jsonify({'error': 'Invalid credentials'})
    else:
        return jsonify({'success': True})


@app.route('/api/attendance', methods=['POST'])
def get_minimal_attendance():
    if not request.form.get('uid'):
        return jsonify({'error': 'UID not provided'})
    if not request.form.get('password'):
        return jsonify({'error': 'Password not provided'})
    try:
        my_acc = SessionUIMS(request.form.get(
            'uid'), request.form.get('password'))
    except Exception as e:
        if e.__class__ == IncorrectCredentialsError:
            return jsonify({'error': 'Invalid credentials'})
    try:
        subjects = my_acc.attendance
    except Exception as e:
        if e.__class__ == UIMSInternalError:
            return jsonify({'error': 'UIMS Internal Failure'})
    else:
        return jsonify(subjects)

@app.route('/api/fullattendance', methods=['POST'])
def get_full_attendance():
    if not request.form.get('uid'):
        return jsonify({'error': 'UID not provided'})
    if not request.form.get('password'):
        return jsonify({'error': 'Password not provided'})
    try:
        my_acc = SessionUIMS(request.form.get(
            'uid'), request.form.get('password'))
    except Exception as e:
        if e.__class__ == IncorrectCredentialsError:
            return jsonify({'error': 'Invalid credentials'})
    try:
        subjects = my_acc.full_attendance
    except Exception as e:
        if e.__class__ == UIMSInternalError:
            return jsonify({'error': 'UIMS Internal Failure'})
    else:
        return jsonify(subjects)


@app.route('/api/timetable', methods=['POST'])
def get_timetable():
    if not request.form.get('uid'):
        return jsonify({'error': 'UID not provided'})
    if not request.form.get('password'):
        return jsonify({'error': 'Password not provided'})

    try:
        my_acc = SessionUIMS(request.form.get(
            'uid'), request.form.get('password'))
    except Exception as e:
        if e.__class__ == IncorrectCredentialsError:
            return jsonify({'error': 'Invalid credentials'})
    try:
        timetable = my_acc.timetable
    except Exception as e:
        if e.__class__ == UIMSInternalError:
            return jsonify({'error': 'UIMS Internal Failure'})
    else:
        return jsonify(timetable)


@app.route('/api/announcements/<int:page>', methods=['POST'])
def get_announcement_page(page=1):
    if not request.form.get('uid'):
        return jsonify({'error': 'UID not provided'})
    if not request.form.get('password'):
        return jsonify({'error': 'Password not provided'})

    try:
        my_acc = SessionUIMS(request.form.get(
            'uid'), request.form.get('password'))
    except Exception as e:
        if e.__class__ == IncorrectCredentialsError:
            return jsonify({'error': 'Invalid credentials'})
    try:
        ann_page = my_acc.annoucements(page)
    except Exception as e:
        if e.__class__ == UIMSInternalError:
            return jsonify({'error': 'UIMS Internal Failure'})
    else:
        return jsonify(ann_page)


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=5000, debug=True)
# [END gae_flex_python_static_files]
