document.addEventListener("DOMContentLoaded", () => {
    const scoreDOM = document.getElementById("score");
    const timeDOM = document.getElementById("time");
    const textDOM = document.getElementById("text");
    const difficultyDOM = document.getElementById("difficulty");

    const score = localStorage.getItem("score");
    const time = localStorage.getItem("time");
    const difficulty = localStorage.getItem("difficulty");

    scoreDOM.innerText = score + "/10";
    timeDOM.innerText = time;
    difficultyDOM.innerText = difficulty;

    console.log(score);
    console.log(localStorage.getItem("time"))

    if (score <= 5) {
        textDOM.innerHTML = `<h1>Você está começando sua jornada!</h1>
        <p>Não desanime, cada passo é uma oportunidade para aprender mais sobre a Palavra de Deus. Continue estudando e logo você vai se surpreender com seu progresso.</p>
        <p style="font-style: italic; font-weight: bold">📖"Esforça-te, e tem bom ânimo; não temas, nem te espantes." (Josué 1:9)</p>`
    } else if (score > 5 && score <= 10) {
        textDOM.innerHTML = `<h1>Excelente!</h1>
        <p>Seu conhecimento bíblico é impressionante! Continue firme em sua caminhada, compartilhando e vivendo a Palavra no dia a dia.</p>
        <p style="font-style: italic; font-weight: bold">📖"Bem-aventurados os que ouvem a Palavra de Deus e a guardam." (Lucas 11:28)</p>`
    }

})

