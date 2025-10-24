document.addEventListener("DOMContentLoaded", () => {
    const scoreDOM = document.getElementById("score");
    const timeDOM = document.getElementById("time");
    const congratsTitleDOM = document.getElementById("congrats-title");
    const congratsSubtitleDOM = document.getElementById("congrats-subtitle");
    const difficultyDOM = document.getElementById("difficulty");
    const verseDOM = document.getElementById("verse");

    const score = localStorage.getItem("score");
    const time = localStorage.getItem("time");
    const difficulty = localStorage.getItem("difficulty");

    scoreDOM.innerText = score + "/10";
    timeDOM.innerText = time;
    difficultyDOM.innerText = difficulty;

    console.log(score);
    console.log(localStorage.getItem("time"))

    if (score <= 5) {
        congratsTitleDOM.innerText = "Você está começando sua jornada!"
        congratsSubtitleDOM.innerText = "Não desanime, cada passo é uma oportunidade para aprender mais sobre a Palavra de Deus. Continue estudando e logo você vai se surpreender com seu progresso."
        verseDOM.innerText = '📖"Esforça-te, e tem bom ânimo; não temas, nem te espantes." (Josué 1:9)'
    } else if (score > 5 && score <= 10) {
        textDOM.innerHTML = `<h1>Excelente!</h1>
        Seu conhecimento bíblico é impressionante! Continue firme em sua caminhada, compartilhando e vivendo a Palavra no dia a dia.
        <p style="font-style: italic; font-weight: bold">📖"Bem-aventurados os que ouvem a Palavra de Deus e a guardam." (Lucas 11:28)`
    }

})

