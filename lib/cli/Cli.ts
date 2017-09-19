import * as readline from "readline";
import Messager from "./Messager";
import PatternLoader from "../pattern-loader/PatternLoader";

/**
 * Class for working with standard CLI
 * WIP - API not stable
 */
export default class Cli {
    // Input-Output interface
    private io;
    private promptSymbol: string = "> ";
    private patternLoader = new PatternLoader();

    /** Creates readline interface,
     * setup prompt symbol
     * and draw first symbol
     */
    constructor() {
        this.io = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.io.setPrompt(this.promptSymbol);

        Messager.attachPatternLoader(this.patternLoader);
    }

    /** Inits CLI,
     * show intro message and
     * handle input
     */
    public run(): void {
        Messager.showIntro();
        this.io.prompt();
        this.handleInput();
    }

    private handleInput(): void {
        this.io.on('line', (line) => {
            this.checkCommands(line);
            this.io.prompt();
        }).on('close', () => {
            process.exit(0);
        });
    }

    private checkCommands(line: string): void {
        this.checkExit(line);
        this.checkPattern(line);
    }

    private checkExit(line: string) {
        if (line == 'exit') {
            this.io.close();
        }
    }

    private checkPattern(line: string) {
        try {
            this.patternLoader.findPatternBootstrap(+line)();
        }
        catch (exception) {
            console.warn(`Pattern under number ${line} not found.`)
        }
    }
}