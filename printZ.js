console.log('// - Matrix printed');
function ZMatrix() {
  let str = '  ';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      str += '   *   ';
      if (j == 4) {
        console.log(str);
        str = '   ';
      }
    }
  }
}
ZMatrix();

console.log('\n // - Print Z');

function printZ(row) {
  if (!row || row == 1) {
    console.log('invalid row value');
    return;
  }
  let zStr = '';
  let k = 0;
  for (let i = 0; i <= row; i++) {
    k = i > 0 && i < row ? row - i : row;
    for (let j = k; j >= 0; j--) {
      if (k && k !== row && j) {
        zStr += ' \xa0 ';
      } else {
        zStr += ' * ';
      }
      if (!j) {
        console.log(zStr);
        zStr = '';
      }
    }
  }
}

printZ(10);
