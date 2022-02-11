'use strict';

const readlineSync = require('readline-sync');

const getCoefFromConsole = coefName => {
  while (true) {
    const coef = readlineSync.question(`${coefName} = `);
    const numCoef = +coef;
    if (isNaN(numCoef) || coef === '') {
      console.log(`Error. Expected a valid real number, got ${coef} instead`);
    } else return numCoef;
  }
};

const getParametersFromConsole = (nameA = 'a', nameB = 'b', nameC = 'c') => {
  const coefArr = [nameA, nameB, nameC];
  const paramsArr = [];

  for (const coef of coefArr) {
    const param = getCoefFromConsole(coef);
    paramsArr.push(param);
  }
  return paramsArr;
};

module.exports = getParametersFromConsole;
