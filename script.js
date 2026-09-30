/* =================================
   ELEMENTS
================================= */

const letterScene = document.getElementById("letterScene");
const musicScene = document.getElementById("musicScene");
const readyScene = document.getElementById("readyScene");
const messageScene = document.getElementById("messageScene");
const gameScene = document.getElementById("gameScene");
const giftScene = document.getElementById("giftScene");
const roseScene = document.getElementById("roseScene");
const finalScene = document.getElementById("finalScene");

const openLetter = document.getElementById("openLetter");
const finishMusic = document.getElementById("finishMusic");

const startButton = document.getElementById("startButton");
const noButton = document.getElementById("noButton");

const playGame = document.getElementById("playGame");

const openGift = document.getElementById("openGift");

const lastButton = document.getElementById("lastButton");

const envelope = document.getElementById("envelope");

const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

const gameArea = document.getElementById("gameArea");
const gameMessage = document.getElementById("gameMessage");

const giftBox = document.getElementById("giftBox");


/* =================================
   SCENE 1 → SCENE 2
================================= */

setTimeout(() => {

    document.body.classList.add("letter-scene");

}, 7500);


/* =================================
   SCENE 2 → SCENE 3
================================= */

openLetter.addEventListener("click", () => {

    document.body.classList.remove("letter-scene");

    document.body.classList.add("music-scene");

});


/* =================================
   SCENE 3 → SCENE 4
================================= */

finishMusic.addEventListener("click", () => {

    document.body.classList.remove("music-scene");

    document.body.classList.add("ready-scene");

});


/* =================================
   ปุ่ม "ไม่" หนี
================================= */

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", moveNoButton);

function moveNoButton() {

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 80;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";

    noButton.style.top = randomY + "px";
}


/* =================================
   SCENE 4 → SCENE 5
================================= */

startButton.addEventListener("click", () => {

    document.body.classList.remove("ready-scene");

    document.body.classList.add("message-scene");

});


/* =================================
   เปิดซองจดหมาย
================================= */

setTimeout(() => {

    if (document.body.classList.contains("message-scene")) {

        envelope.classList.add("open");

    }

}, 1200);


/* =================================
   SCENE 5 → GAME
================================= */

playGame.addEventListener("click", () => {

    document.body.classList.remove("message-scene");

    document.body.classList.add("game-scene");

    startGame();

});


/* =================================
   GAME
================================= */

let score = 0;

let timeLeft = 20;

let gameTimer;

let heartTimer;

function startGame() {

    score = 0;

    timeLeft = 20;

    scoreElement.textContent = score;

    timerElement.textContent = timeLeft;

    gameMessage.textContent = "";

    gameArea.innerHTML = "";

    createHeart();

    heartTimer = setInterval(() => {

        createHeart();

    }, 900);

    gameTimer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {

            endGame();

        }

    }, 1000);

}


function createHeart() {

    if (
        !document.body.classList.contains("game-scene")
    ) {
        return;
    }

    const heart = document.createElement("button");

    heart.className = "game-heart";

    heart.textContent = "❤️";

    const maxX = gameArea.clientWidth - 60;

    const maxY = gameArea.clientHeight - 60;

    const x = Math.random() * Math.max(maxX, 10);

    const y = Math.random() * Math.max(maxY, 10);

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    heart.addEventListener("click", () => {

        score++;

        scoreElement.textContent = score;

        heart.remove();

        if (score >= 10) {

            winGame();

        }

    });

    gameArea.appendChild(heart);

}


function endGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "ไม่เป็นไร เอาใหม่ได้ 💗";

    setTimeout(() => {

        startGame();

    }, 1800);

}


function winGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "เย่! เก็บครบแล้ววว 🥺💗";

    setTimeout(() => {

        document.body.classList.remove("game-scene");

        document.body.classList.add("gift-scene");

    }, 1800);

}


/* =================================
   SCENE 7 → SCENE 8
================================= */

openGift.addEventListener("click", () => {

    giftBox.classList.add("gift-open");

    setTimeout(() => {

        document.body.classList.remove("gift-scene");

        document.body.classList.add("rose-scene");

    }, 1000);

});


/* =================================
   SCENE 8 → FINAL
================================= */

lastButton.addEventListener("click", () => {

    document.body.classList.remove("rose-scene");

    document.body.classList.add("final-scene");

});
