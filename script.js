/* =========================
   SCENE 1 → SCENE 2
========================= */

setTimeout(() => {
    document.body.classList.add("letter-scene");
}, 7500);


/* =========================
   SCENE 2 → SCENE 3
========================= */

const openLetter = document.getElementById("openLetter");

openLetter.addEventListener("click", function () {

    document.body.classList.remove("letter-scene");

    document.body.classList.add("music-scene");

});


/* =========================
   SCENE 3 → SCENE 4
========================= */

const finishMusic = document.getElementById("finishMusic");

finishMusic.addEventListener("click", function () {

    document.body.classList.remove("music-scene");

    document.body.classList.add("ready-scene");

});


/* =========================
   ปุ่ม "ไม่" หนี
========================= */

const noButton = document.getElementById("noButton");

function moveNoButton() {

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 80;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";

    noButton.style.top = randomY + "px";
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);


/* =========================
   SCENE 4 → SCENE 5
   กด "เริ่มเลย"
========================= */

const startButton = document.getElementById("startButton");

const envelope = document.getElementById("envelope");

const playGame = document.getElementById("playGame");

startButton.addEventListener("click", function () {

    document.body.classList.remove("ready-scene");

    document.body.classList.add("message-scene");

    /*
       สำคัญมาก!
       ต้องสั่งเปิดซองหลังจาก
       เข้าฉาก message แล้ว
    */

    setTimeout(() => {

        envelope.classList.add("open");

    }, 500);


    /*
       หลังจากกระดาษเด้งออกมา
       ค่อยให้ปุ่มเล่นเกมโผล่
    */

    setTimeout(() => {

        playGame.classList.remove("hidden");

    }, 1800);

});


/* =========================
   SCENE 5 → SCENE 6
========================= */

playGame.addEventListener("click", function () {

    document.body.classList.remove("message-scene");

    document.body.classList.add("game-scene");

    startGame();

});


/* =========================
   GAME
========================= */

const scoreElement = document.getElementById("score");

const timerElement = document.getElementById("timer");

const gameArea = document.getElementById("gameArea");

const gameMessage = document.getElementById("gameMessage");

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

    if (!document.body.classList.contains("game-scene")) {
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


    heart.addEventListener("click", function () {

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


/* =========================
   SCENE 7 → SCENE 8
========================= */

const openGift = document.getElementById("openGift");

const giftBox = document.getElementById("giftBox");


openGift.addEventListener("click", function () {

    giftBox.classList.add("gift-open");


    setTimeout(() => {

        document.body.classList.remove("gift-scene");

        document.body.classList.add("rose-scene");

    }, 1000);

});


/* =========================
   SCENE 8 → SCENE 9
========================= */

const lastButton = document.getElementById("lastButton");


lastButton.addEventListener("click", function () {

    document.body.classList.remove("rose-scene");

    document.body.classList.add("final-scene");

});
