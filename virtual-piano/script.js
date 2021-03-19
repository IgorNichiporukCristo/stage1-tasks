const piano = document.querySelector(".piano")
const pianokey = document.querySelectorAll(".piano-key")

const playEventMouse = (event) => {
    let note = document.getElementById(event.target.dataset.letter.toLowerCase());
    note.currentTime = 0;
    note.play();
    event.target.classList.add("piano-key-active");
    let timeout = () => {
        event.target.classList.remove("piano-key-active");
    }
    setTimeout(timeout, 500);
}

const addEventMouse = (event) => {
    playEventMouse(event);
    pianokey.forEach((elem) => {
        elem.addEventListener("mouseover", playEventMouse);
    })
}
const removeEventMouse = () => {
    pianokey.forEach((elem) => {
        elem.removeEventListener("mouseover", playEventMouse);
    })
}

const playEventKey = (event) => {
    if (!event.repeat) {
        let note = document.getElementById(event.code[3].toLowerCase());
        note.currentTime = 0;
        note.play();
        pianokey.forEach((elem) => {
            if (event.code[3] == elem.dataset.letter) {
                elem.classList.add("piano-key-active");
                let timeout = () => {
                    elem.classList.remove("piano-key-active");
                }
                setTimeout(timeout, 500);
            }
        })
    }
}

window.addEventListener('keydown', playEventKey, false);
piano.addEventListener("mousedown", addEventMouse, false);
piano.addEventListener("mouseup", removeEventMouse, false);