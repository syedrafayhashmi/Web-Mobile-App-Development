# 

import speech_recognition as sr
r = sr.Recognizer()

with sr.Microphone() as source:
    print("Say something")
    audio = r.listen(source)
    print("Time over, Thanks")

try:
    print("TEXT: " + r.recognize_google(audio))
except:
    pass