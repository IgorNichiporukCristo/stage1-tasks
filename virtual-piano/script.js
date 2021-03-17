const piano = document.querySelector(".piano")
const pianokey = document.querySelectorAll(".piano-key")

piano.addEventListener("mousedown", () => {
    pianokey.forEach((elem) => {
        elem.addEventListener("mouseover", (event) => {
            playAudio(event)
        })
    })

})
piano.addEventListener("mouseup", () => {
    pianokey.forEach((elem) => {
        elem.removeEventListener("mouseout", (event) => {
            return false;
        })
    })
})


playAudio = (event) => {
    let note = document.getElementById(event.target.dataset.note);
    note.currentTime = 0;
    note.play();
}