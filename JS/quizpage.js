import Perguntas from "./perguntas.js";

const perguntas = Perguntas()[localStorage.getItem("difficulty")];
let perguntasDisponiveis = perguntas;
console.log(perguntas);

localStorage.setItem("score", 0);

const alternativesDOM = document.getElementsByClassName("alternative");
const numPageDOM = document.getElementById("numPage");

let buttonIsClicked = false;
let correctAlternative = {};
let numPage = 0;
let time = 0;
let question;

localStorage.setItem("time", 0);
localStorage.setItem("score", 0);

const timeInterval = setInterval(() => {
    time++;
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
        alternativeBtn.classList.add("correct");
        localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 1);
    } else {
        alternativeBtn.classList.add("incorrect");
    }

    perguntasDisponiveis.splice(perguntasDisponiveis.indexOf(question), 1);
    console.log(perguntasDisponiveis);
    setTimeout(updateQuestion, 300);
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
        alternativesDOM[i].classList.remove("correct", "incorrect");

        if (question.alternativas[i].certa) {
            correctAlternative = question.alternativas[i];
        }

        alternativesDOM[i].id = "alternative" + i;
        alternativesDOM[i].innerText = question.alternativas[i].alternativa;

        alternativesDOM[i].addEventListener("click", validateAnswer);
    }

    console.log(correctAlternative);
}

updateQuestion();