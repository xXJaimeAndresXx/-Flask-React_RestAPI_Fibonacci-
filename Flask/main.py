from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/fibonacci', methods=['GET','POST'])
def fibonacci():
    number= request.args.get('number')
    a, b = 0,1
    serie=[]
    while a < int(number):
        print(a, end=' ')
        serie.append(a)
        a, b = b, a + b
    json_serie=json.dumps(serie)
     
    return (json_serie)

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True,port= 5000)