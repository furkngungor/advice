const body = document.querySelector("body");
const dice = document.querySelector("button");

function adviceGenerator() {
  fetch("https://api.adviceslip.com/advice").then(async res => {
    try {
      const data = await res.json();
      document.querySelector("h6").innerText = "Advice #" + data.slip.id;
      document.querySelector("q").innerText = data.slip.advice;
    } catch (error) {
      console.log(error);
    }
  });
}

body.onload = () => adviceGenerator();

dice.onclick = () => adviceGenerator();
