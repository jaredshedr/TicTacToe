
export default function winDecider(matrix) {
  let winner = '';
  winner = checkRows(matrix);

  if (winner !== '') {
    return winner;
  }
  winner = checkColumns(matrix);

  if (winner !== '') {
    return winner;
  }

  winner = checkDiagonals(matrix);

  if (winner !== 'none') {
    return winner;
  }

  return winner;
}

function checkRows(matrix) {

  for (let row of matrix) {
    let rowWinner = checkRow(row);
    if (rowWinner !== '') {
      return rowWinner;
    }
  }

  return '';
}

function checkColumns(matrix) {
  let columnArray = [[], [], []];
  columnArray[0] = [matrix[0][0], matrix[1][0], matrix[2][0]];
  columnArray[1] = [matrix[0][1], matrix[1][1], matrix[2][1]];
  columnArray[2] = [matrix[0][2], matrix[1][2], matrix[2][2]];

  for (const column of columnArray) {
    let columnWinner = checkColumn(column);
    if (columnWinner !== '') {
      return columnWinner;
    }
  }

  return '';
}

function checkDiagonals(matrix) {
  const firstDiagonal = [matrix[0][0], matrix[1][1], matrix[2][2]];
  const secondDiagonal = [matrix[2][0], matrix[1][1], matrix[0][2]];

  let possibleWinnerFirst = firstDiagonal[0];
  let possibleWinnerSecond = secondDiagonal[0];

  let hasWon = true;

  if (possibleWinnerFirst === '' && possibleWinnerSecond === '') {
    return '';
  }

  for (const player of firstDiagonal) {
    if (player !== possibleWinnerFirst) {
      hasWon = false;
    }
  }

  if (hasWon) {
    return possibleWinnerFirst;
  }

  hasWon = true;

  for (const player of secondDiagonal) {
    if (player !== possibleWinnerSecond) {
      hasWon = false;
    }
  }

  if (hasWon) {
    return possibleWinnerSecond;
  }

  return '';
}

function checkRow(row) {
  if (row[0] === '') {
    return '';
  }

  const possibleWinner = row[0];

  for (let currentIndex = 1; currentIndex < row.length; currentIndex++) {
    let currentSquare = row[currentIndex];

    if (currentSquare !== possibleWinner) {
      return '';
    }
  }

  return possibleWinner;
}

function checkColumn(column) {
  if (column[0] === '') {
    return '';
  }

  const possibleWinner = column[0];

  for (let currentIndex = 1; currentIndex < column.length; currentIndex++) {
    let currentSquare = column[currentIndex];

    if (currentSquare !== possibleWinner) {
      return '';
    }
  }

  return possibleWinner;
}


