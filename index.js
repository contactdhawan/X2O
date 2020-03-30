var currentPlayer = "O";
var won = false;
function place(box) {
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  if (currentPlayer === "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
  checkboard();
}

function checkboard() {
  for (var x = 0; x < 3; x++) {
    var first = document.getElementById(`${x}_0`).innerText;
    var second = document.getElementById(`${x}_1`).innerText;
    var third = document.getElementById(`${x}_2`).innerText;
    checkWinner(first, second, third);
    first = document.getElementById(`0_${x}`).innerText;
    second = document.getElementById(`1_${x}`).innerText;
    third = document.getElementById(`2_${x}`).innerText;
    checkWinner(first, second, third);
  }
  checkWinner(
    document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerText
  );
  checkWinner(
    document.getElementById("2_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("0_2").innerText
  );
}

function checkWinner(first, second, third) {
  if (first != "" && first === second && first === third) {
    alert("Winner");
    won = true;
  }
}
