const readline = require('readline')

const size = 50
let cursor = 0

// console.clear()

process.stdout.write("Loading...\n")

process.stdout.write("\x1B[?25l")
for (let i = 0; i < size; i++) {
  process.stdout.write("\u2591")
}

readline.cursorTo(process.stdout, cursor, 2);

timer = setInterval(() => {
  process.stdout.write("\u2588")
  cursor++;
  if (cursor >= size) {
    clearTimeout(timer)
  }
}, 100)
