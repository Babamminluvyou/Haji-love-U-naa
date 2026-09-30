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
