let data = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];

function count(data) {
  let temp = [];
  let output = 0;
  for (let i = 0; i < data.length; i++) {
    const number = data[i];

    if (!temp.includes(number)) {
      temp.push(number);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    const perTemp = temp[i];
    let count = 0;
    for (let j = 0; j < data.length; j++) {
      const perData = data[j];
      if (perTemp === perData) {
        count++;
      }
    }

    let jual = Math.floor(count / 2);

    output += jual;
  }
  return output;
}

console.log(count(data));
console.log(count([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(count([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(count([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
