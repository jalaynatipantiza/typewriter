const typeWriter = (string) => {
  let increase = 0;
  for (const char of string) {
    increase += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, increase);
  }
};

const sentence = "hello there from lighthouse labs";

typeWriter(sentence);

