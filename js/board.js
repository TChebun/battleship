class Board {
  constructor(name) {
    this.boardGame = document.getElementById(name);
  }

  init(settings) {
    this.settings = settings;
  }

  renderBoard() {
    for (let row = 0; row < this.settings.rows; row++) {
      let tr = document.createElement("tr");
      this.boardGame.appendChild(tr);
      for (let col = 0; col < this.settings.cols; col++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
    this.getNumberForBoard();
    this.getLettersForBoard();
  }

  getNumberForBoard() {
    let numbersForBoard = document.createElement("div");
    this.boardGame.insertAdjacentElement("beforebegin", numbersForBoard);
    numbersForBoard.classList.add("numbers");

    // for (let i = 1; i <= 10; i++) {
    //   let number = document.createElement("div");
    //   numbersForBoard.appendChild(number);
    //   number.innerText = i;
    // }

    for (let i = 0; i <= 10; i++) {
      if (i == 0) {
        let number = document.createElement("div");
        numbersForBoard.appendChild(number);
        number.innerText = "";
      } else {
        let number = document.createElement("div");
        numbersForBoard.appendChild(number);
        number.innerText = i;
      }
    }
  }

  getLettersForBoard() {
    let letters = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"];

    let lettersForBoard = document.createElement("div");
    this.boardGame.insertAdjacentElement("beforebegin", lettersForBoard);
    lettersForBoard.classList.add("letters");

    for (let i = 0; i < 10; i++) {
      let letter = document.createElement("div");
      lettersForBoard.appendChild(letter);
      letter.innerText = letters[i];
    }
  }
}
