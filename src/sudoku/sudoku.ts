export function isValid(sudokuText: string): boolean {
  const sudokuNumbers = sudokuText.replace(/ /g, "");

  // empty spaces
  const allNumbers = 81;
  const sudokuEntersRemoved = sudokuNumbers.replace(/(\r\n|\n|\r)/gm, "");

  if (sudokuEntersRemoved.length < allNumbers) {
    return false;
  }

  if (sudokuEntersRemoved.length > allNumbers) {
    return false;
  }
  //
  const aaa = sudokuNumbers.split("");
  const rows = numbersToRows(aaa);
  console.log('rows', rows);
  

  return true;
}

function numbersToRows(arr: string[]) {
    const rows: string[] = [];

    let tmp = "";
    arr.forEach((elem) => {
      if (elem === "\n") {
        rows.push(tmp);
        tmp = "";
      } else {
        tmp += elem;
      }
    });
    if (rows[0] === "" && rows.length > 9) {
      rows.shift();
    }
    return rows;
}
