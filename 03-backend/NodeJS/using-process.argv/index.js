import chalk from 'chalk';

let args = process.argv;
for (let i = 2; i < args.length; i++) {
    if (args[i] === 'hello') {
        console.log(chalk.green('hello'));
    } else if (args[i] === 'error') {
        console.log(chalk.red('error'));
    } else {
        console.log(chalk.yellow(args[i]));
    }
}
