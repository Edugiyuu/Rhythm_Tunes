export function PlayAudio(audioFile: string, volume: number = 0.3) {
    const audio = new Audio(audioFile);
    audio.volume = volume;
    audio.play();
}