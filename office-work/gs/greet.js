import { argv } from 'node:process';
const args = argv.slice(2);
console.log(argv);


if (args.length === 0) {
  console.error("Please provide a name as an argument.");
  process.exit(1);
}

const name = args
console.log(`Hello, ${name}!`);