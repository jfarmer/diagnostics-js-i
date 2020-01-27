function papayas(potatos) {
  let meow = potatos[0];

  for (let i = 0; i < potatos.length; i += 1) {
    let banana = potatos[i];

    if (banana > meow) {
      meow = banana;
    }
  }

  return meow;
}

let testInput = [1, 2, 3, -1, -2, -3];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = [-10, 10];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = [50, 70, -10, 842, 4, 28];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
