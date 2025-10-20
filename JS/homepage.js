const difficulty = document.getElementById("selectDificuldade");   
const link = document.getElementById("link");

link.addEventListener("click", (event) => {
    if (difficulty.value == "" || difficulty.value == null) {
        event.preventDefault();
    } else {
        console.log(difficulty.value);
        localStorage.setItem("difficulty", difficulty.value);
    }
});
