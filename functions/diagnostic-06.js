function papayas(potatos) {
  let meow = potatos[0];

  for (let i = 0; i < potatos.length; i += 1) {
    let banana = potatos[i];

    if (banana.length > meow.length) {
      meow = banana;
    }
  }

  return meow;
}

console.log('Running some test inputs:');
console.log();

let testInput = ['aaaa', 'bbb', 'cc', 'd'];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = ['w', 'xx', 'yyy', 'zz'];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
console.log();

testInput = ['these', 'are', 'some', 'fantastic', 'words'];
console.log('Input:', testInput);
console.log('Returns:', papayas(testInput));
