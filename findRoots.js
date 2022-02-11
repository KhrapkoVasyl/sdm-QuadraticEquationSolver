'use strict';

const findRoots = ([a, b, c]) => {
  if (a === 0) {
    console.log('Error. a cannot be 0');
    return;
  }
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    console.log('There are 2 roots');

    const discriminantRoot = Math.sqrt(discriminant);

    const x1 = (-b + discriminantRoot) / (2 * a);
    const x2 = (-b - discriminantRoot) / (2 * a);

    console.log(`x1 = ${x1} \nx2 = ${x2}`);
  } else if (discriminant === 0) {
    console.log('There is 1 root');

    const x1 = -b / (2 * a);
    console.log('x1 = ' + x1);
  } else {
    console.log('There are 0 roots');
  }
};
