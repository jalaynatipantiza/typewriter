const typeWriter = (string) => {
  let increase = 0;
  let strLine = string + '\n'
  for (const char of strLine) {
    increase += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, increase);
  }
};

const sentence = "hello there from lighthouse labs";

typeWriter(sentence);

