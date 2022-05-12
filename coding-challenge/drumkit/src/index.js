function playSound(audioFile) {
    let audio = new Audio("./resources/sounds/" + audioFile);
    audio.play()
}