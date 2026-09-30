/* =================================
   SCENE 1 → SCENE 2
================================= */

setTimeout(function () {

    document.body.classList.add("letter-scene");

}, 7500);


/* =================================
   SCENE 2 → SCENE 3
================================= */

const openLetter =
    document.getElementById("openLetter");

openLetter.addEventListener("click", function () {

    document.body.classList.remove("letter-scene");

    document.body.classList.add("music-scene");

});


/* =================================
   SCENE 3 → SCENE 4
================================= */

const finishMusic =
    document.getElementById("finishMusic");

finishMusic.addEventListener("click", function () {

    document.body.classList.remove("music-scene");

    document.body.classList.add("ready-scene");

});


/* =================================
   ปุ่มไม่หนี
================================= */

const noButton =
    document.getElementById("noButton");


function moveNoButton() {

    const x =
        Math.random() *
        (window.innerWidth - 120);

    const y =
        Math.random() *
        (window.innerHeight - 80);

    noButton.style.position = "fixed";

    noButton.style.left = x + "px";

    noButton.style.top = y + "px";
}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    moveNoButton
);


/* =================================
   SCENE 4 → SCENE 5

   กดเริ่มเลย
================================= */

const startButton =
    document.getElementById("startButton");

const envelope =
    document.getElementById("envelope");

const playGame =
    document.getElementById("playGame");


startButton.addEventListener("click", function () {

    /* เปลี่ยนฉาก */

    document.body.classList.remove(
        "ready-scene"
    );

    document.body.classList.add(
        "message-scene"
    );


    /* ซ่อนปุ่มเกมก่อน */

    playGame.classList.add("hidden");


    /*
       รอให้ Scene 5 แสดงก่อน
       แล้วค่อยเปิดซอง
    */

    setTimeout(function () {

        envelope.classList.add("open");

    }, 700);


    /*
       หลังเปิดซองแล้ว
       ให้ปุ่มเกมโผล่
    */

    setTimeout(function () {

        playGame.classList.remove("hidden");

    }, 1800);

});


/* =================================
   SCENE 5 → SCENE 6
================================= */

playGame.addEventListener("click", function () {

    document.body.classList.remove(
        "message-scene"
    );

    document.body.classList.add(
        "game-scene"
    );

    startGame();

});


/* =================================
   GAME
================================= */

const scoreElement =
    document.getElementById("score");

const timerElement =
    document.getElementById("timer");

const gameArea =
    document.getElementById("gameArea");

const gameMessage =
    document.getElementById("gameMessage");


let score = 0;

let timeLeft = 20;

let gameTimer;

let heartTimer;


function startGame() {

    score = 0;

    timeLeft = 20;

    scoreElement.textContent = "0";

    timerElement.textContent = "20";

    gameMessage.textContent = "";

    gameArea.innerHTML = "";


    createHeart();


    heartTimer = setInterval(
        createHeart,
        900
    );


    gameTimer = setInterval(function () {

        timeLeft--;

        timerElement.textContent =
            timeLeft;


        if (timeLeft <= 0) {

            endGame();

        }

    }, 1000);

}


function createHeart() {

    if (
        !document.body.classList.contains(
            "game-scene"
        )
    ) {
        return;
    }


    const heart =
        document.createElement("button");


    heart.className =
        "game-heart";


    heart.textContent =
        "❤️";


    const maxX =
        gameArea.clientWidth - 60;


    const maxY =
        gameArea.clientHeight - 60;


    heart.style.left =
        Math.random() *
        Math.max(maxX, 10)
        + "px";


    heart.style.top =
        Math.random() *
        Math.max(maxY, 10)
        + "px";


    heart.addEventListener(
        "click",
        function () {

            score++;

            scoreElement.textContent =
                score;


            heart.remove();


            if (score >= 10) {

                winGame();

            }

        }
    );


    gameArea.appendChild(heart);

}


function endGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "ไม่เป็นไร เอาใหม่ได้ 💗";


    setTimeout(function () {

        startGame();

    }, 1800);

}


function winGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "เย่! เก็บครบแล้ววว 🥺💗";


    setTimeout(function () {

        document.body.classList.remove(
            "game-scene"
        );

        document.body.classList.add(
            "gift-scene"
        );

    }, 1800);

}


/* =================================
   GIFT → ROSES
================================= */

const openGift =
    document.getElementById("openGift");

const giftBox =
    document.getElementById("giftBox");


openGift.addEventListener("click", function () {

    giftBox.classList.add(
        "gift-open"
    );


    setTimeout(function () {

        document.body.classList.remove(
            "gift-scene"
        );

        document.body.classList.add(
            "rose-scene"
        );

    }, 1000);

});


/* =================================
   ROSES → FINAL
================================= */

const lastButton =
    document.getElementById("lastButton");


lastButton.addEventListener("click", function () {

    document.body.classList.remove(
        "rose-scene"
    );

    document.body.classList.add(
        "final-scene"
    );

});
