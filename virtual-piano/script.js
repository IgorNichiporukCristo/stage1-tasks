const piano = document.querySelector(".piano")
const pianokey = document.querySelectorAll(".piano-key")

const playAudio = (event) => {
    let note = document.getElementById(event.target.dataset.note);
    console.log(note)
    console.log(event.target)
    console.log(document.querySelectorAll(".piano-key"))
    note.currentTime = 0;
    note.play();
}

const addEventMouse = (event) => {
    playAudio(event)
    pianokey.forEach((elem) => {
        elem.addEventListener("mouseover", playAudio)
    })
}
const removeEventMouse = () => {
    pianokey.forEach((elem) => {
        elem.removeEventListener("mouseover", playAudio)
    })
}

const addEventKeys = (event) => {

}

window.addEventListener('keydown', addEventKeys, false);
piano.addEventListener("mousedown", addEventMouse, false)
piano.addEventListener("mouseup", removeEventMouse, false)