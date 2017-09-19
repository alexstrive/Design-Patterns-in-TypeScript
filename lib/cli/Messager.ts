import * as fs from "fs";
import Formator from "./Formator";
import PatternLoader from "../pattern-loader/PatternLoader";

const welcomeMessage = fs.readFileSync(
    "./resources/welcome-message.txt",
    "utf-8");

export default class Messager {
    private static patternLoader: PatternLoader;

    static attachPatternLoader(patternLoader) {
        this.patternLoader = patternLoader;
    }

    static showIntro() {
        console.log(Formator.header(welcomeMessage));
        this.showInfo();
    }

    static showInfo() {
        if (this.patternLoader) {
            this.showAvailablePatterns();
        }
        else {
            console.log(Formator.subheader("No available patterns!"))
        }
    }

    private static showAvailablePatterns() {
        console.log(Formator.subheader("List of available patterns:"));
    }
}