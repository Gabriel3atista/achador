class Achador {

  generateRandomData (size) {
    const data = [];
    for (let i = 0; i < size; i++) {
      const randomValue = Math.floor(Math.random() * 1000) + 1;
      data.push(randomValue);
    }
    return data;
  }

  generateSortedData (size) {
    const data = [];
    let number = 0;
    for (let i = 0; i < size; i++) {
      data.push(number);
      number++;
    }
    return data;
  }

  binarySearch (array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (array[middle] === target) {
        return middle;
      } else if (array[middle] < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return -1;
  }
}

const achador = new Achador();
const data = achador.generateSortedData(1000);

let start = performance.now();
let index = achador.binarySearch(data, 1);
let end = performance.now();

console.log(`The search took ${start - end} to find the index ${index}`);