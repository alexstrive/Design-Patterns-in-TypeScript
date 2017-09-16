import * as fs from "fs";
import Formator from "./Formator";

const patternsList = require("../../../resources/patterns-list.json");

const welcomeMessage = fs.readFileSync(
    "./resources/welcome-message.txt",
    "utf-8");

export default class Messager {
    static showIntro() {
        console.log(Formator.header(welcomeMessage));
        Messager.showInfo();
    }

    static showInfo() {
        console.log(Formator.subheader("List of avalible patterns:"));

        for (let patternType of patternsList) {
            console.log(Formator.patternTypeText(patternType.name));

            for (let patternName of patternType.patterns) {
                console.log(Formator.patternText(patternName))
            }
        }
    }
}