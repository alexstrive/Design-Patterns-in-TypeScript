import * as fs from "fs";
import Formatter from "./Formatter";
import PatternLoader from "../pattern-loader/PatternLoader";

export default class Messager {
    private static patternLoader: PatternLoader;

    /**
     * Attach pattern loader
     * This action modify behaviral of #showInfo method
     *
     * @param {PatternLoader} patternLoader
     * @returns {void}
     */
    static attachPatternLoader(patternLoader: PatternLoader) {
        this.patternLoader = patternLoader;
    }

    /**
     * Shows welcome message and information about patterns
     *
     * @returns {void}
     */
    static showIntro() {
        fs.readFile("./resources/welcome-message.txt", "utf8",(err, data) => {
            console.log(Formatter.header(data));
            this.showInfo();
        });
    }

    /**
     * Check avaliblity of pattern list
     * If app have loaded any then show it
     * If no patterns have sloaded alert about that
     *
     * @returns {void}
     */
    static showInfo() {

        if (!this.patternLoader) {
            console.error("Pattern loader didn't attach!");
            return;
        }

        if (this.patternLoader.avaliblePatterns) {
            this.showAvailablePatterns();
        }
        else {
            console.log(Formatter.subheader("No avalible patterns!"))
        }
    }

    /**
     * Show all avalible patterns in list
     *
     * @returns {void}
     */
    private static showAvailablePatterns() {
        console.log(Formatter.subheader("List of available patterns:"));

        //  TODO: categorize them into category
        this.patternLoader.avaliblePatterns.forEach((currentPattern, patternIndex) => {

            if (currentPattern.runner) {
                console.log(`${patternIndex} ${Formatter.patternText(Formatter.capitalize(currentPattern.name))}`);
            }

        });
    }
}