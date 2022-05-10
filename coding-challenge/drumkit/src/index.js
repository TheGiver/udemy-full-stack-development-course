const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener('click', buttonClickAlert)
})

function buttonClickAlert() {
    alert("Button clicked")
}