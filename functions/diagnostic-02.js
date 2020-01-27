function papayas(woof, meow) {
  let x;

  if (woof > meow) {
    x = woof;
  } else {
    x = meow;
  }

  return x;
}

console.log('Running some test inputs:');
console.log();

console.log('Input (10, 20) returns:', papayas(10, 20));
console.log('Input (-40, -50) returns:', papayas(-40, -50));
