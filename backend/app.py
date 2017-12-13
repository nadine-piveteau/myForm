import sys
import os
import json
from flask import Flask
from flask import request
from flask_cors import CORS


app = Flask(__name__)
# Only necessary when running locally, right?
CORS(app)


progress = 0

@app.route('/run_post', methods=['GET', 'POST'])
def getForm():
    data = request.data.decode('utf-8')
    form_dict = json.loads(data)
    print ("Launch the tiling job for "+ form_dict.get("layer_id"))
    print (form_dict)

    return data

@app.route('/get', methods=['GET'])
def getStatus():
    return "Sucess"

@app.route('/progress', methods=['GET'])
def getProgress():
    global progress
    progress = progress + 1
    return str(progress)


if __name__ == "__main__":
    port = int(sys.argv[1])
    app.run(host='0.0.0.0', port=port)
