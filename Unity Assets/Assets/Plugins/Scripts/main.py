
'''
class Greeter():
    def __init__(self, name):
        self.name = name
    def greet(self):
        return "Hi, " + self.name
'''
import speech_recognition as sr 
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

r = sr.Recognizer()

class Greeter(Resource):
    def get(self, name):
        with sr.AudioFile("D:\\Unity\\FinalYearInterview\\Assets\\Audio\\myFile.wav") as source:
            audio = r.listen(source)
            try:
                text = r.recognize_google(audio)
                return text
            except:
                return "No Answer Given"

api.add_resource(Greeter, '/<string:name>')

if __name__ == '__main__':
    app.run(debug=False, port = 8000)
