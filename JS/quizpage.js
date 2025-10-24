import Perguntas from "./perguntas.js";

const perguntas = Perguntas()[localStorage.getItem("difficulty")];
let perguntasDisponiveis = perguntas;
// console.log(perguntas);

localStorage.setItem("score", 0);

const alternativesDOM = document.getElementsByClassName("alternative");
const numPageDOM = document.getElementById("numPage");
const timerDOM = document.getElementById("timer");

let buttonIsClicked = false;
let correctAlternative = {};
let numPage = 0;
let time = 0;
let question;

localStorage.setItem("time", 0);
localStorage.setItem("score", 0);

console.log(localStorage.getItem("difficulty"));


const timeInterval = setInterval(() => {
    time++;
    timerDOM.innerText = secondsToHHMMSS(time)
}, 1000);

function secondsToHHMMSS(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRest = seconds % 60;

    const minutesFormat = String(minutes).padStart(2, '0');
    const secondsFormat = String(secondsRest).padStart(2, '0');

    return `${minutesFormat}:${secondsFormat}`;
}

function getRandomQuestion(perguntasDisponiveis) {
    const randomIterator = Math.floor(Math.random() * perguntasDisponiveis.length);
    return perguntasDisponiveis[randomIterator];
}

function validateAnswer(event) {
    if (buttonIsClicked) return;
    buttonIsClicked = true;

    const alternativeBtn = event.target;
    if (alternativeBtn.innerText == correctAlternative.alternativa) {
        alternativeBtn.classList.replace("bg-[#FCEBD5]", "bg-green-400");

        localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 1);
    } else {
        alternativeBtn.classList.replace("bg-[#FCEBD5]", "bg-red-400");
    }

    perguntasDisponiveis.splice(perguntasDisponiveis.indexOf(question), 1);
    // console.log(perguntasDisponiveis);
    setTimeout(updateQuestion, 500);
}



function updateQuestion(){
    if (numPage == 10) {
        clearInterval(timeInterval);
        localStorage.setItem("time", secondsToHHMMSS(time));
        window.location.href = "../HTML/finalpage.html";
    }

    buttonIsClicked = false;

    question = getRandomQuestion(perguntasDisponiveis);

    numPage++;
    numPageDOM.innerText = numPage + "/10";

    const questionDOM = document.getElementById("question");
    questionDOM.innerText = question.questao;

    for (let i = 0; i < alternativesDOM.length; i++) {
        alternativesDOM[i].classList.replace("bg-green-400", "bg-[#FCEBD5]");
        alternativesDOM[i].classList.replace("bg-red-400", "bg-[#FCEBD5]");

        if (question.alternativas[i].certa) {
            correctAlternative = question.alternativas[i];
        }

        alternativesDOM[i].id = "alternative" + i;
        alternativesDOM[i].innerText = question.alternativas[i].alternativa;

        alternativesDOM[i].onclick = validateAnswer;
    }

    // console.log(correctAlternative);
}

updateQuestion();