const typingDiv = document.getElementById("typing")

// de text die je moet typen voor de race
const text = `The function of a paragraph is to mark a pause, setting the paragraph apart from what precedes it. If a paragraph is preceded by a title or subhead, the indent is superfluous and can therefore be omitted.`

// split alle characters in ieder zijn eigen "span"
const characters = text.split("").map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

const cursorCharacter = characters[0];
cursorCharacter.classList.add("cursor");

document.addEventListener("keydown", ({ key }) => {
    console.log(key);
    if (key === cursorCharacter.innerText) {
        // nadat je de correcte key getypt
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("done");
        cursorCharacter = character[++cursorIndex];
        cursorCharacter.classList.add("cursor");
    }
    });    