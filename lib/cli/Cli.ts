import * as readline from "readline";
import Messager from "./Messager";

/**
 * Class for working with standard CLI
 * WIP - API not stable
 */
export default class Cli {
    private static rl;
    private static promptSymbol: string = "> ";

    /** Creates readline interface,
     * setup prompt symbol
     * and draw first symbol
     */
    private static init(): void {
        Cli.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        Cli.rl.setPrompt(Cli.promptSymbol);
    }

    /** Inits CLI,
     * show intro message and
     * handle input
     */
    static start(): void {
        Cli.init();

        Messager.showIntro();

        Cli.handleInput();
    }

    private static handleInput(): void {
        Cli.rl.on('line', (line) => {

            Cli.rl.prompt();
        }).on('close', () => {
            process.exit(0);
        });
    }
}