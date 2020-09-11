from flask import Flask, request
import json

app = Flask(__name__)

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
    app.run( debug=True,port= 5000)