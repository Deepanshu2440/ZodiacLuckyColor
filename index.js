const  zodiac = document.getElementById("zodiac");
console.log(zodiac.value);

const body = document.body;

const changeBackground = ()=>{

    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "tarus":
            body.style.backgroundColor = "yellow";
            break;
        case "gemini":
            body.style.backgroundColor = "blue";
            break;
        case "cancer":
            body.style.backgroundColor = "green";
            break;
        case "leo":
            body.style.backgroundColor = "red";
            break;
        case "virgo":
            body.style.backgroundColor = "red";
            break;
        case "libra":
            body.style.backgroundColor = "red";
            break;
        case "scorpio":
            body.style.backgroundColor = "red";
            break;
        case "sagittarius":
            body.style.backgroundColor = "blue";
            break;
        default:
            body.style.backgroundColor="white";
            break;
    }
}