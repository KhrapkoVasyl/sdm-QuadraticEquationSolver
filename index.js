'use strict';

const fs = require('fs');
const findRoots = require('./findRoots');
const getParametersFromConsole = require('./readCoefFromConsole');

// added \s before \n due to the specific reading of the file by Node.js
const regexp = /^-?\d+\.?\d*\s\-?\d+\.?\d*\s\-?\d+\.?\d*\s\n$/s;
// take real numbers in the format num \s num \s num \n (without spaces)

if (process.argv.length >= 3) {
  try {
    const path = process.argv[2];
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    if (!regexp.test(data)) {
      throw new Error('Invalid file format');
    }
    const params = data.split(' ');
    const numberParams = params.map(el => +el);
    findRoots(numberParams);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
} else {
  const params = getParametersFromConsole();
  findRoots(params);
}


Patient: Doctor, I have a pain in my eye whenever I drink tea.
Doctor: Take the spoon out of the mug before you drink.