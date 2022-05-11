const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener('click', playSound)
})

function playSound() {
    let audio = new Audio("./resources/sounds/tom-1.mp3");
    audio.play()
}