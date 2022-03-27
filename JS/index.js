// variablen voor de game
const typingDiv = document.getElementById("typing")
const statsDiv = document.getElementById("WPM")
const wrongletter2 = document.getElementById("fail")
const wrongletter = []
const paragraph = [
    `the function of a paragraph is to mark a pause setting the paragraph apart from what precedes it if a paragraph is preceded by a title or subhead the indent is superfluous and can therefore be omitted`,
    `You are what you are and you are where you are because of what has gone into your mind. You change what you are and you change where you are by changing what goes into your mind.`,
    `Perhaps if you know you are insane then you are not insane.`,
    `The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.`,
    `Some people pass through your life and you never think about them again. Some you think about and wonder what ever happened to them. Some you wonder if they ever wonder what happened to you. And then there are some you wish you never had to think about again.`,
    `Doubting someone is not necessarily a bad thing, because it is something that you do to get to know the person better. What is really bad is not being concerned at all.`,
    `I used to dread getting older because I thought I would not be able to do all the things I wanted to do, but now that Im older I find that I dont want to do them.`,
    `I hope it is true that a man can die and yet not only live in others but give them life, and not only life but that great consciousness of life.`,
    `For centuries, the battle of morality was fought between those who claimed that your life belongs to God and those who claimed that it belongs to your neighbors. And no one came to say that your life belongs to you and that the good is to live it.`,
    `In the casino, the cardinal rule is to keep them playing and to keep them coming back. The longer they play, the more they lose, and in the end, we get it all. Running a casino is like robbing a bank with no cops around.`,
    `Humans need to practice what they are learning a good deal before they master it. Furthermore, they tend to lose a good deal of their learning when they cease to practice the skills associated with this learning in their daily lives.`,

];


function startgame() {

//haalt de inhoud van de text en de wpm weg is alleen relevant als je opnieuw wilt spelen
typingDiv.innerHTML = "";
statsDiv.innerHTML = "";
wrongletter2.innerHTML ="";
wrongletter.length = 0

// de text die hij random value uit de array met teskten
const text = paragraph[Math.floor(Math.random() * paragraph.length)];

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
const keylistener = document.addEventListener("keypress", ({ key }) => {
    console.log(key);
    // na een key press start de timer
    if (!startTime) {
        startTime = new Date();
    }

    // als je de corecte key ge geklikt
    if (key === cursorCharacter.innerText) {
        cursorCharacter.classList.remove("wrong")
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("done");
        cursorCharacter = characters[++cursorIndex];    
    } 
    // als je de verkeerde key durkt krijgt de letter de class "wrong"
    else {
        cursorCharacter.classList.remove("cursor")
        cursorCharacter.classList.add("wrong");
        wrongletter.push("1")
    }
    
    // WPM Berekening
    if (cursorIndex === characters.length) {
        endTime = new Date();
        const tijd = endTime - startTime;
        const seconds = tijd / 1000;
        const number_of_words = text.split(' ').length;
        const wps = number_of_words / seconds;
        const wpm = Math.floor(wps * 60.0);
        // hier display hij de WPM 
        document.getElementById('WPM').innerText =`${wpm} wpm`
        const number_of_fail = wrongletter.length
        document.getElementById('fail').innerText =`${number_of_fail}`     
    }
    cursorCharacter.classList.add("cursor");
    
    });
    }
