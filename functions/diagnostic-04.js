function papayas(potatos) {
  let meow = 0;

  for (let i = 0; i < potatos.length; i += 1) {
    let banana = potatos[i];
    meow = meow + banana;
  }

  return meow;
}

console.log('Running some test inputs:');
console.log();

let testInput = [1, 2, 3];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = [-10, 10];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = [0, 10, 20, 30, 40, 0];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
