let box = ["", "", "", "", "", "", "", "", ""];

let jogador1 = [];
let jogador2 = [];
let vez = true;

function marcar(numero) {
  if (vitoria() === false) {
    if (vez === true && event.target.title == "") {
      jogador1.push(numero);
      vez = false;
      event.target.title = "jogador1";
      box[numero] = "jogador1";
      pintarj1();
      setTimeout(() => {
        empate();
      }, 100);
      setTimeout(() => {
        vitoria();
      }, 100);
    } else if (vez === false && event.target.title == "") {
      jogador2.push(numero);
      vez = true;
      this.title = "jogador2";
      event.target.title = "jogador2";
      box[numero] = "jogador2";
      pintarj2();
      setTimeout(() => {
        empate();
      }, 100);
      setTimeout(() => {
        vitoria();
      }, 100);
    }
  }
}
function pintarj1() {
  var j1 = document.querySelectorAll('[title="jogador1"]');
  for (let i = 0; i < j1.length; i++) {
    j1[i].style.backgroundColor = "";
    j1[i].innerHTML = "<p title='x'>x</p>";
  }
}

function pintarj2() {
  var j2 = document.querySelectorAll('[title="jogador2"]');
  for (let i = 0; i < j2.length; i++) {
    j2[i].style.backgroundColor = "";
    j2[i].innerHTML = "<p title='o'>o</p>";
  }
}

function vitoria() {
  var condicoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < condicoes.length; i++) {
    let pos1 = condicoes[i][0];
    let pos2 = condicoes[i][1];
    let pos3 = condicoes[i][2];

    if (box[pos1] == box[pos2] && box[pos1] == box[pos3] && box[pos1] != "") {
      if (vez === true) {
        let oVenceu = document.getElementById("acabou");
        oVenceu.innerHTML = "Jogador O Venceu";
      } else {
        let oVenceu = document.getElementById("acabou");
        oVenceu.innerHTML = "Jogador X Venceu";
      }
      return true;
    }
  }
  return false;
}

function resetar() {
  let j1 = document.querySelectorAll('[title="jogador1"]');

  for (let i = 0; i < j1.length; i++) {
    j1[i].style.backgroundColor = "yellowgreen";
    j1[i].innerHTML = "";
    j1[i].setAttribute("title", "");
  }
  let j2 = document.querySelectorAll('[title="jogador2"]');
  for (let i = 0; i < j2.length; i++) {
    j2[i].style.backgroundColor = "yellowgreen";
    j2[i].innerHTML = "";
    j2[i].setAttribute("title", "");
  }

  box = ["", "", "", "", "", "", "", "", ""];

  jogador1 = [];
  jogador2 = [];
  vez = true;
  let oVenceu = document.getElementById("acabou");
  oVenceu.innerHTML = "";
}

function empate() {
  if (
    box[0] != "" &&
    box[1] != "" &&
    box[2] != "" &&
    box[3] != "" &&
    box[4] != "" &&
    box[5] != "" &&
    box[6] != "" &&
    box[7] != "" &&
    box[8] != "" &&
    vitoria() === false
  ) {
    let oVenceu = document.getElementById("acabou");
    oVenceu.innerHTML = "Empate";

    return true;
  }

  return false;
}
