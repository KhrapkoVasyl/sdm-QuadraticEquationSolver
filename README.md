<p align="center">
    <a href="https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/KhrapkoVasyl/sdm-QuadraticEquationSolver?style=for-the-badge"></a>
    <a href="https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/network">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/KhrapkoVasyl/sdm-QuadraticEquationSolver?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/KhrapkoVasyl/sdm-QuadraticEquationSolver?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/KhrapkoVasyl/sdm-QuadraticEquationSolver?style=for-the-badge">
    </a>
    <a href="https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver">
        <img alt="GitHub license" src="https://img.shields.io/github/contributors/KhrapkoVasyl/sdm-QuadraticEquationSolver.svg?style=for-the-badge">
    </a>

</p>

<div align="center">
  <h1 align="center">Quadratic Equation Solver</h1>
</div>

## About the project

This is a simple console application for solving quadratic equations.
Lab work on software development methodologies.

## How does the project works

The console application solves quadratic equations in two modes:

- [Interactive mode](#interactive)

- [Non-interactive (file) mode](#non-interactive-file-mode)

### Interactive mode

In interactive mode, the application starts when no argument from console has been passed to it. In this mode, the application asks you to enter 3 coefficients in turn: a, b and c, displays the resulting equation on the screen and the found roots. NOTE! The coefficients must be real numbers, otherwise the application will ask you to enter them again. It is also impossible to set the value of the coefficient a equal to zero, in this case the application will also generate an error.

### Non-interactive (file) mode

In non-interactive mode, the program takes one argument from console - the path to the file with the coefficients of the equation. The file format must be .txt, the file must contain 3 numbers: a, b, c, separated by one space. A dot is expected as a decimal point. After the last coefficient (c) must be a newline character (\n) and the file ends.

Example of input file (\s - space, \n - new line):

1 0 0 --> 1\s0\s0\n

If an invalid file format is given or an invalid file path will be specified, the program will terminate with an error message. It is also impossible to set the value of the coefficient a equal to zero, in this case the application will also generate an error.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

1. Clone the repo:
   ```sh
   git clone https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver.git
   ```
2. Open project directory and install NPM packages:

   ```sh
   cd sdm-QuadraticEquationSolver
   npm install
   ```

3. Start the application:

   ```sh
   node index.js
   ```

   For interactive mode

   And

   ```sh
   node index.js  path/to/file.txt
   ```

   For non-interactive (file) mode

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/blob/main/LICENSE) for more information.

## Contributors

- Vasyl Khrapko - [@vazzz7zzzok](https://t.me/vazzz7zzzok) - khrapko2002@gmail.com

## Revert-commit

I hope you appreciate [this commit](https://github.com/KhrapkoVasyl/sdm-QuadraticEquationSolver/commit/6ac04ac549ca7a615d061fa050d5c8d4fb615cc2).
