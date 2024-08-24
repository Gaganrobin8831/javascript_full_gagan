const {argv} = require('node:process')

const args = argv.slice(2);



if (args.length === 0) {
  console.error("Please provide a name as an argument.");
  // process.exit(2);

}

const name = args
console.log(`Hello, ${name}!`);