export default {
  draw,
  highlight
};

var diagonals = []
var tileDiagonals = new Map()
var highlighted = []

// ****************************

function draw(boardEl) {
  for (let i = 0; i < 30; i++) {
    diagonals.push([])
  }


  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div")
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");

      let majorDiagIdx = diagonals[7 - (i - j)]
      let minorDiagIdx = diagonals[15 + (i + j)]

      majorDiagIdx.push(tileEl);
      minorDiagIdx.push(tileEl);
      tileDiagonals.set(tileEl, [majorDiagIdx, minorDiagIdx])

      rowEl.appendChild(tileEl)
    }
    boardEl.appendChild(rowEl)
  }
}

function highlight(tileEl) {
  // clear all currently highlighted tiles
  for (let diagonal of highlighted) {
    for (let el of diagonal) {
      el.classList.remove("highlighted")
    }
  }

  if (tileEl) {
    highlighted = tileDiagonals.get(tileEl)

    for (let diagonal of highlighted) {
      for (let el of diagonal) {
        el.classList.add("highlighted")
      }
    }
  }
}
