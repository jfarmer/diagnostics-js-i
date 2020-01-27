# Diagnostics

Each example contains code involving the fundamental concepts outlined in the [JavaScript Crash Course][jfarmer-intro-javascript]. These are meant to help you validate your understanding of variables and control flow (functions, loops, conditionals, etc.).

The tricky thing about control flow is that although we write code top-to-bottom, left-to-right, that is not how the JavaScript interpreter executes our code. The interpreter is always running one *line* at a time, but it can jump between lines or run the same line multiple times.

`console.log` statements are spread throughout. Each statement is prefixed with a number and might contain some dynamic information. The numbers are ordered according to how the `console.log` statements are ordered in the file, from top-to-bottom. They might not get *executed* in that order, however.

The idea is to predict what gets printed, in what order, and how many times and then compare your predictions against reality. Where your predictions disagree is where you're confused about how control statements work in JavaScript.

## Contents <!-- omit in toc -->

- [Control Flow Diagnostics](#control-flow-diagnostics)
  - [Instructions - Control Flow](#instructions---control-flow)
  - [Control Flow Worked Example](#control-flow-worked-example)
  - [Control Flow Diagnostic 1](#control-flow-diagnostic-1)
  - [Control Flow Diagnostic 2](#control-flow-diagnostic-2)
  - [Control Flow Diagnostic 3](#control-flow-diagnostic-3)
  - [Control Flow Diagnostic 4](#control-flow-diagnostic-4)
  - [Control Flow Diagnostic 5](#control-flow-diagnostic-5)
  - [Control Flow Diagnostic 6](#control-flow-diagnostic-6)
  - [Control Flow Diagnostic 7](#control-flow-diagnostic-7)
- [Function Diagnostics](#function-diagnostics)
  - [Instructions - Function Diagnostics](#instructions---function-diagnostics)
  - [Worked Exercise - Function Diagnostics](#worked-exercise---function-diagnostics)
  - [Exercises - Function Diagnostics](#exercises---function-diagnostics)

## Control Flow Diagnostics

### Instructions - Control Flow

**Note**: This might feel like a quiz and therefore you might feel pressure to "get it right". This is counterproductive. If you're confused about anything below, this is your chance to find out and address it.

For each example, do the following:

1. Spend no more than 2 minutes per example.
1. **DO NOT** run the code. First, **READ THE CODE**. Write what you think will be printed and in what order.
1. **DO NOT** guess and check.

   Remember, the goal is **not** to correctly predict the output, but to expose your confusion (if it exists). A motivated prediction that's wrong is worth 100 times more than a guess which happens to be correct. If you genuinely don't know where to begin, go read the [JavaScript Crash Course][jfarmer-intro-javascript].
1. Run the code and see what is printed out and in what order
1. Compare your expectations with what is actually printed.
1. If your predictions disagree with observation, come up with 1-3 different ideas for how you might be confused.

Seriously, **write** down your predictions first. You *will* fool yourself if you don't make your predictions concrete. You don't need to write down the whole sprint being printed — that's why we included the number — but make sure to include the value of any dynamic data.

### Control Flow Worked Example

Consider the following example:

```javascript
console.log('1. Hello friends!');

let age = 102;

console.log('2. The value of age is:', age);
console.log('3. This is the end.');
```

Its output would be:

```text
1. Hello friends!
2. The value of age is: 102
3. This is the end
```

You might write down your prediction like:

```text
1.
2. 102
3.
```

This is enough to see whether your prediction matched reality.

Depending on the control statements used, the `console.log` statements might not be executed in order. The numerical prefix is there to make it easier to record your predictions and compare then against the actual output.

Sometimes we use intentionally absurd variable names and values like `waffles`, `bananas`, etc. because we want to get you thinking about which lines of code are executing and in what order.

### Control Flow Diagnostic 1

```javascript
console.log('1. Hello, friends!');

let firstName = 'Jesse';
let age = 36;

console.log('2. The value of firstName is:', firstName);
console.log('3. The value of age is:', age);

firstName = 'Arian';

console.log('4. After, the value of firstName is:', firstName);
console.log('5. After, the value of age is:', age);

age = age + 5;

console.log('6. Finally, the value of firstName is:', firstName);
console.log('7. Finally, the value of age is:', age);
```

### Control Flow Diagnostic 2

```javascript
console.log('1. Time to go!');

let firstNumber = 42;
let secondNumber = 108;

let result = 'waffles';

console.log('2. The first number is:', firstNumber);
console.log('3. The second number is:', secondNumber);
console.log('4. result is:', result);

if (firstNumber > secondNumber) {
  console.log('5. This is the first branch.');

  result = 'bananas';
} else {
  console.log('6. This is the second branch.');

  result = 'papayas';
}

console.log('7. Now we are down here.');
console.log('8. After all that, result is:', result);
```

### Control Flow Diagnostic 3

```javascript
console.log('1. Time to go!');

let firstNumber = 42;
let secondNumber = 108;

let result = 'meow meow meow';

console.log('2. The first number is:', firstNumber);
console.log('3. The second number is:', secondNumber);
console.log('4. result is:', result);

if (firstNumber > secondNumber) {
  console.log('5. This is the first branch.');

  result = 'woof woof woof';
} else {
  console.log('6. This is the second branch.');

  result = 'chirp chirp chirp';
}

result = 'potato chips are great';

console.log('7. Now we are down here.');
console.log('8. After all that, result is:', result);
```

### Control Flow Diagnostic 4

```javascript
function doSomethingAmazing() {
  console.log('1. Time to go!');

  let firstNumber = 42;
  let secondNumber = 108;

  let result = 'waffles';

  console.log('2. The first number is:', firstNumber);
  console.log('3. The second number is:', secondNumber);
  console.log('4. result is:', result);

  if (firstNumber > secondNumber) {
    console.log('5. This is the first branch.');

    result = 'bananas';
  } else {
    console.log('6. This is the second branch.');

    result = 'papayas';
  }

  console.log('7. Now we are down here.');
  console.log('8. After all that, result is:', result);

  return result;
}

console.log('9. She sells sea shells by the sea shore.');

let potato = doSomethingAmazing();

console.log('10. The value of potato is:', potato);
```

Make predictions about what would happen if you changed the values of `firstNumber` and `secondNumber`. Change their values, make new predictions, and see if those predictions still correspond with your expectations.

### Control Flow Diagnostic 5

```javascript
function doSomethingAmazing(firstNumber, secondNumber) {
  console.log('1. Time to go!');

  let result = 'waffles';

  console.log('2. The first number is:', firstNumber);
  console.log('3. The second number is:', secondNumber);
  console.log('4. result is:', result);

  if (firstNumber > secondNumber) {
    console.log('5. This is the first branch.');

    result = 'bananas';
  } else {
    console.log('6. This is the second branch.');

    result = 'papayas';
  }

  console.log('7. Now we are down here.');
  console.log('8. After all that, result is:', result);

  return result;
}

console.log('9. She sells sea shells by the sea shore.');

let potato = 'blub blub blub';

console.log('10. At this point, the value of potato is:', potato);

potato = doSomethingAmazing(509, 100);

console.log('11. Afterwards, the value of potato is:', potato);

potato = doSomethingAmazing(-100, 47);

console.log('12. Finally, the value of potato is:', potato);
```

### Control Flow Diagnostic 6

```javascript
function makeStuffHappen() {
  let num = 108;

  console.log('1. Making stuff happen, hopefully!');
  console.log('2. Before, the value of num is:', num);

  for (let i = 0; i < 5; i += 1) {
    console.log('3. The value of i is:', i);
    console.log('4. For looooop!');
  }

  console.log('5. After the for loop, we are down here.');
  console.log('6. Afterwards, the value of i is:', i);
  console.log('7. And the value of num is:', num);

  return num + 20;
}

let waffles = 17;

console.log('8. Is this the real life?');
console.log('9. Before, the value of waffles is:', waffles);

waffles = makeStuffHappen();

console.log('10. Is this just fantasy?');
console.log('11. After, the value of waffles is:', waffles);
```

### Control Flow Diagnostic 7

```javascript
function makeStuffHappen(num) {
  console.log('1. Making stuff happen, hopefully!');
  console.log('2. Before, the value of num is:', num);

  for (let i = 0; i < num; i += 1) {
    console.log('3. The value of i is:', i);
    console.log('4. For looooop!');
  }

  console.log('5. After the for loop, we are down here.');
  console.log('6. Afterwards, the value of i is:', i);
  console.log('7. And the value of num is:', num);

  return num + 20;
}

let waffles = 17;

console.log('8. Is this the real life?');
console.log('9. Before, the value of waffles is:', waffles);

waffles = makeStuffHappen(2);

console.log('10. Is this just fantasy?');
console.log('11. The value of waffles is:', waffles);

waffles = makeStuffHappen(4);

console.log('12. Caught in a landslide.');
console.log('13. Finally, the value of waffles is:', waffles);
```

## Function Diagnostics

If the [control flow diagnostics](#control-flow-diagnostics) say you're all clear, try these diagnostics aimed at helping you figure out what a function does from its structure alone.

Each function below does something simple but every part of it has a confusing or nonsensical name. The computer/interpreter doesn't care how we name things and has no idea whether the names we use are potentially confusing to other humans.

### Instructions - Function Diagnostics

For each function, you're given a few example inputs and outputs. The idea is to figure out what the function does and change the name and implementation to better reflect the intended behavior.

Assume that each function does the correct work and only the names are wrong.

1. If the examples take more than 5-10 minutes each, re-read the [JavaScript Crash Course][jfarmer-intro-javascript] and work through the [JavaScript Fundamentals Exercises][jfarmer-javascript-fundamentals-i].
1. To begin, **DO NOT RUN THE CODE**. Read the function and make a prediction about what the output will be given the example inputs.

   Don't hesitate to trace the execution of the code by hand, using a paper + pen to keep track of the variables involved.
1. Run the code and see if your predictions match what you observe.
1. Play around with your own example inputs, making predictions along the way, running the code, and comparing them with the observed output.
1. Add your own example inputs that you think will help you understand what's going on.
1. Once you're confident the function is doing what you think it is, give it a better name and rewrite it so that its code better reflects its purpose.

### Worked Exercise - Function Diagnostics

Consider this function:

```javascript
function papayas(zork) {
  let waffles = 2 * zork;

  return waffles;
}

console.log('With input 0, the function returns:', papayas(0));
console.log('With input 12, the function returns:', papayas(12));
console.log('With input -14, the function returns:', papayas(-14));
console.log('With input 108, the function returns:', papayas(108));
```

This will print:

```text
With input 0, the function returns: 0
With input 12, the function returns: 24
With input -14, the function returns: -28
With input 108, the function returns: 216
```

From this, you might see that `papayas` takes a number as input and returns the input times 2. To make the code better reflect what it does, we might write something like:

```javascript
function double(num) {
  let result = 2 * num;

  return result;
}
```

The goal isn't to come up with the exact perfect name for the function and the pieces of code inside the function body. Rather, the goal is to see if you, as a human, can follow the code exactly as the interpreter does.

### Exercises - Function Diagnostics

You can run/edit these files directly.

- [Function Diagnostic 1](./functions/diagnostic-01.js)
- [Function Diagnostic 2](./functions/diagnostic-02.js)
- [Function Diagnostic 3](./functions/diagnostic-03.js)
- [Function Diagnostic 4](./functions/diagnostic-04.js)
- [Function Diagnostic 5](./functions/diagnostic-05.js)
- [Function Diagnostic 6](./functions/diagnostic-06.js)

[jfarmer-intro-javascript]: https://github.com/jfarmer/intro-javascript
[jfarmer-javascript-fundamentals-i]: https://github.com/wismith/exercises-javascript-fundamentals
