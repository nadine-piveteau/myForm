from flask import Flask
#from redis import Redis, RedisError
import os
import socket
from flask import request
import json

# Connect to Redis
#redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route('/update', methods=['GET', 'POST'])
def getForm():
    data = request.data.decode('utf-8')
    form_dict = json.loads(data)
    print ("Launch the tiling job for "+ form_dict.get("layer_id"))
    
    
    return ""

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=4201)