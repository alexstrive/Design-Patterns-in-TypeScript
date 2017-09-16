import * as chalk from "chalk";

export default class Formator {

    static header(text: string): string {
        return chalk.bold.underline(text);
    }

    static subheader(text: string): string {
        return chalk.underline(text);
    }

    static patternTypeText(text: string): string {
        return chalk.inverse(text);
    }

    static patternText(text: string): string {
        return `- ${text}`;
    }
}