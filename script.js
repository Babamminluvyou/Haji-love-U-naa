const cat = document.getElementById("cat");
const speech = document.getElementById("speech");

setTimeout(() => {

    speech.innerHTML = `
        เมี๊ยววว~ 🐱<br>
        เอาหูมานี่ มีไรจะบอก
    `;

}, 4500);


/* รอให้ฉากแรกจบ แล้วไปฉากจดหมาย */

setTimeout(() => {

    document.body.classList.add("letter-scene");

}, 7500);
