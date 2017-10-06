import * as chalk from "chalk";

export default class Formatter {

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

    static capitalize(phrase: string): string {
        let words = phrase.split(" ");

        return words.reduce((phrase, word: string) => {
            let [firstLetter, ...restWord] = word;
            return `${phrase}${firstLetter.toUpperCase()}${restWord.join("")} `;
        }, "");
    }
}