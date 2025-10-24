// const difficulty = document.getElementsByClassName("selectDificuldade");   
// const btns = document.getElementsByClassName("btnJogar");

// for (const btn of btns) {
//     console.log(difficulty);
//     btn.addEventListener("click", (event) => {
//         console.log(difficulty[0].value.length)
//         if (difficulty[0].value && difficulty[0].value.length > 0) {
//             console.log(difficulty[0].value);
//             localStorage.setItem("difficulty", difficulty[0].value);
//             window.location.href = "./HTML/quizpage.html";
//         }
//     });
// }


function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const selectDificuldade = isMobile()
  ? document.getElementById("selectDificuldadeMobile")
  : document.getElementById("selectDificuldadeDesktop");

const btnJogar = isMobile()
  ? document.getElementById("btnJogarMobile")
  : document.getElementById("btnJogarDesktop");

btnJogar.addEventListener("click", () => {
  const dificuldade = selectDificuldade.value;

  if (!dificuldade) {
    alert("Por favor, selecione uma dificuldade.");
    return;
  }

  localStorage.setItem("difficulty", dificuldade);
  window.location.href = "./HTML/quizpage.html";
});
