export default {
  draw,
  highlight
};

var tiles = [];

// ****************************

function draw(boardEl) {
  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div")
    let rowTiles = []
    tiles.push(rowTiles)
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      tileEl.dataset.row = i
      tileEl.dataset.col = j
      rowEl.appendChild(tileEl)
      rowTiles.push(tileEl)
    }
    boardEl.appendChild(rowEl)
  }
}

function highlight(tileEl) {
  // TODO: clear previous highlights (if any) and
  // then find the tiles in the two diagonals
  // (major and minor) that `tileEl` belongs to,
  // to highlight them via CSS class "highlighted"

  // clear all currently highlighted tiles
  for (let row of tiles) {
    for (let el of row) {
      el.classList.remove("highlighted")
    }
  }

  if (tileEl) {
    let rowEl = tileEl.parentNode
    let boardEl = rowEl.parentNode

    let tileRowIdx = Number(tileEl.dataset.row)
    let tileColIdx = Number(tileEl.dataset.col)

    // highlight in the up-left direction
    for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
      let el = findTile(i, j)
      el.classList.add("highlighted")
    }
    // highlight in the up-right direction
    for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++) {
      let el = findTile(i, j)
      el.classList.add("highlighted")
    }
    // highlight in the down-left direction
    for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
      let el = findTile(i, j)
      el.classList.add("highlighted")
    }
    // highlight in the down-right direction
    for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
      let el = findTile(i, j)
      el.classList.add("highlighted")
    }
  }
}

function findTile(row, col) {
  // return document.querySelector(`#board > div:nth-child(${row + 1}) > div:nth-child(${col + 1})`)
  return tiles[row][col]
}
