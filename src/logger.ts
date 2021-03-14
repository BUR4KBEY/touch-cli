import chalk from 'chalk';

export class Logger {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    error(message: string) {
        console.log(`${chalk.red.bold("[ERROR]")} ${chalk.yellow.bold(this.fileName)} ${chalk.gray.bold("—")} ${message}`);
    }

    successful(message: string) {
        console.log(`${chalk.green.bold("[SUCCESSFUL]")} ${chalk.yellow.bold(this.fileName)} ${chalk.gray.bold("—")} ${message}`);
    }

}