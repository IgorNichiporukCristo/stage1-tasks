const piano = document.querySelector(".piano")
const pianokey = document.querySelectorAll(".piano-key")

const addEvent = () => {
    pianokey.forEach((elem) => {
        elem.addEventListener("mouseover", (event) => {
            playAudio(event)
        })
    })
}

const removeEvent = () => {
    pianokey.forEach((elem) => {
        elem.removeEventListener("mouseout", addEvent)
    })
}

const playAudio = (event) => {
    let note = document.getElementById(event.target.dataset.note);
    note.currentTime = 0;
    note.play();
}

piano.addEventListener("mousedown", addEvent, false) 
piano.addEventListener("mouseup", removeEvent)