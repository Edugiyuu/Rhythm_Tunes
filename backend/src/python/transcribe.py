import sys
import os
import speech_recognition as sr
from pydub import AudioSegment
from pydub.utils import make_chunks
from difflib import SequenceMatcher

audio_path = sys.argv[1]
expected_lyrics = sys.argv[2]

sound = AudioSegment.from_file(audio_path)
sound = sound.set_frame_rate(16000).set_channels(1)

# Divide em pedaços de 10s (máximo que o Google lida bem)
chunks = make_chunks(sound, 10000)

recognizer = sr.Recognizer()
full_transcription = ""

for i, chunk in enumerate(chunks):
    chunk_filename = f"chunk_{i}.wav"
    chunk.export(chunk_filename, format="wav")

    with sr.AudioFile(chunk_filename) as source:
        audio = recognizer.record(source)

    try:
        text = recognizer.recognize_google(audio)
        full_transcription += " " + text
    except sr.UnknownValueError:
        pass
    except sr.RequestError as e:
        print(f"Erro na API no chunk {i}: {e}", file=sys.stderr)

    os.remove(chunk_filename)

# Avalia a similaridade com a letra original
similarity = SequenceMatcher(None, full_transcription.lower(), expected_lyrics.lower()).ratio()
score = round((similarity * 100) * 2.5, 2)

print(score)
print(full_transcription.strip())
