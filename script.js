/* =================================
   GET SCENES
================================= */

const scenes = {

    intro:
        document.getElementById("introScene"),

    letter:
        document.getElementById("letterScene"),

    music:
        document.getElementById("musicScene"),

    ready:
        document.getElementById("readyScene"),

    message:
        document.getElementById("messageScene"),

    game:
        document.getElementById("gameScene"),

    gift:
        document.getElementById("giftScene"),

    rose:
        document.getElementById("roseScene"),

    final:
        document.getElementById("finalScene")

};


/* =================================
   CHANGE SCENE
================================= */

function showScene(scene) {

    Object.values(scenes).forEach(function (item) {

        if (item) {
            item.classList.remove("active");
        }

    });

    if (scene) {
        scene.classList.add("active");
    }

}


/* =================================
   SCENE 1 → SCENE 2
================================= */

setTimeout(function () {

    showScene(scenes.letter);

}, 7500);


/* =================================
   SCENE 2 → SCENE 3
================================= */

const openLetter =
    document.getElementById("openLetter");

openLetter.addEventListener("click", function () {

    showScene(scenes.music);

});


/* =================================
   SCENE 3 → SCENE 4
================================= */

const finishMusic =
    document.getElementById("finishMusic");

finishMusic.addEventListener("click", function () {

    showScene(scenes.ready);

});


/* =================================
   ปุ่มไม่หนี
================================= */

const noButton =
    document.getElementById("noButton");

function moveNoButton() {

    const maxX =
        window.innerWidth - 120;

    const maxY =
        window.innerHeight - 80;

    const x =
        Math.random() *
        Math.max(maxX, 20);

    const y =
        Math.random() *
        Math.max(maxY, 20);

    noButton.style.position = "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";
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
================================= */

const startButton =
    document.getElementById("startButton");

const envelope =
    document.getElementById("envelope");

const playGame =
    document.getElementById("playGame");


startButton.addEventListener(
    "click",
    function () {

        playGame.classList.add("hidden");

        envelope.classList.remove("open");

        showScene(scenes.message);

    }
);


/* =================================
   กดซอง → เปิดซอง
================================= */

envelope.addEventListener(
    "click",
    function () {

        if (
            envelope.classList.contains("open")
        ) {
            return;
        }

        envelope.classList.add("open");

        setTimeout(function () {

            playGame.classList.remove(
                "hidden"
            );

        }, 1200);

    }
);


/* =================================
   SCENE 5 → SCENE 6
================================= */

playGame.addEventListener(
    "click",
    function () {

        showScene(scenes.game);

        startGame();

    }
);


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

let gameTimer = null;

let heartTimer = null;


function startGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    score = 0;

    timeLeft = 20;

    scoreElement.textContent = "0";

    timerElement.textContent = "20";

    gameMessage.textContent = "";

    gameArea.innerHTML = "";

    createHeart();

    heartTimer =
        setInterval(
            createHeart,
            900
        );

    gameTimer =
        setInterval(
            function () {

                timeLeft--;

                timerElement.textContent =
                    timeLeft;

                if (
                    timeLeft <= 0
                ) {

                    endGame();

                }

            },
            1000
        );

}


function createHeart() {

    if (
        !scenes.game.classList.contains(
            "active"
        )
    ) {
        return;
    }

    const heart =
        document.createElement(
            "button"
        );

    heart.className =
        "game-heart";

    heart.textContent =
        "❤️";

    const maxX =
        gameArea.clientWidth - 50;

    const maxY =
        gameArea.clientHeight - 50;

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

            if (
                score >= 10
            ) {

                winGame();

            }

        }
    );

    gameArea.appendChild(
        heart
    );

}


function endGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "ไม่เป็นไร เอาใหม่ได้ 💗";

    setTimeout(
        startGame,
        1800
    );

}


function winGame() {

    clearInterval(gameTimer);

    clearInterval(heartTimer);

    gameArea.innerHTML = "";

    gameMessage.textContent =
        "เย่! เก็บครบแล้ววว 🥺💗";

    setTimeout(
        function () {

            showScene(
                scenes.gift
            );

        },
        1800
    );

}


/* =================================
   GIFT → ROSES
================================= */

const openGift =
    document.getElementById("openGift");

const giftBox =
    document.getElementById("giftBox");


openGift.addEventListener(
    "click",
    function () {

        giftBox.classList.add(
            "gift-open"
        );

        setTimeout(
            function () {

                showScene(
                    scenes.rose
                );

            },
            1000
        );

    }
);


/* =================================
   ROSES → FINAL
================================= */

const lastButton =
    document.getElementById("lastButton");

lastButton.addEventListener(
    "click",
    function () {

        showScene(
            scenes.final
        );

    }
);
