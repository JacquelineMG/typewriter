const typewriter = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char,);
    }, 50 + delay);
    delay += 50;
  } setTimeout(() => {
    console.log("\n");
  }, 50 + delay);
};

const sentence1 = "hello there from lighthouse labs";

typewriter(sentence1);