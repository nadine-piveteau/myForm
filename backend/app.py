from flask import Flask
import os
from flask import request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/update', methods=['GET', 'POST'])
def getForm():
    data = request.data.decode('utf-8')
    form_dict = json.loads(data)
    print ("Launch the tiling job for "+ form_dict.get("layer_id"))
    
    
    return data

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8000)
