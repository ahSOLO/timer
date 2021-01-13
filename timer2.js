const setTimer = function(time) {
  setTimeout(() => {
    console.log("Beep!", time, "second timer finished.")
  }, time * 1000);
}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key >= 1 && key <= 9) {
    console.log("Setting timer for", key, "seconds");
    setTimer(key);
  }
  if (key === 'b') {
    console.log("Beep!");
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});