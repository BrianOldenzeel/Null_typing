const typingDiv = document.getElementById("typing")

// de text die je moet typen voor de race
const text = `the function of a paragraph is to mark a pause setting the paragraph apart from what precedes it if a paragraph is preceded by a title or subhead the indent is superfluous and can therefore be omitted`

// split alle characters in ieder zijn eigen "span"
const characters = text.split("").map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add("cursor");

let startTime = null;
let endTime = null;

// registreert alle key presses
const keylistener = document.addEventListener("keydown", ({ key }) => {
    console.log(key);
    // na een key press start de timer
    if (!startTime) {
        startTime = new Date();
    }

    if (key === cursorCharacter.innerText) {
        // nadat je de correcte key getypt
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("done");
        cursorCharacter = characters[++cursorIndex];
        
    }
    // wpm display
    if (cursorIndex >= characters.length) {
        endTime = new Date();
        const tijd = endTime - startTime;
        const seconds = tijd / 1000;
        const number_of_words = text.split(' ').length;
        const wps = number_of_words / seconds;
        const wpm = math.floor(wps * 60.0);
        document.getElementById('WPM').innerText = `wpm = ${wpm}`
        document.removeEventListener(keydown, keylistener);
        return;
    }

    cursorCharacter.classList.add("cursor");

    });

