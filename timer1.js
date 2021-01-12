const args = process.argv.slice(2);

const setTimer = function(time) {
  setTimeout(() => {
    console.log("ALARM!!!")
  }, time * 1000);
}

for (arg of args) {
  if (arg >= 0) {
    setTimer(arg);
  }
}