//With the rest parameter, you can create functions that take a variable number of arguments
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  