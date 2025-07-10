import sys
import speech_recognition as sr
from difflib import SequenceMatcher

audio_path = sys.argv[1]
expected_lyrics = sys.argv[2]

recognizer = sr.Recognizer()
with sr.AudioFile(audio_path) as source:
    audio = recognizer.record(source, duration=30, offset=0.5)  # Adjusted duration and offset for better performance

try:
    transcription = recognizer.recognize_google(audio)
    similarity = SequenceMatcher(None, transcription.lower(), expected_lyrics.lower()).ratio()
    score = round((similarity * 100) * 2, 2)
    if score > 90:
        score = 100
    print(score)
    print(transcription)
    

except:
    print(0)
