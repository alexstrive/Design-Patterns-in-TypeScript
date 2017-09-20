import Pattern from "./Pattern";

export default class PatternLoader {
    private _avaliblePatterns: Pattern[];

    constructor() {
        this.loadPatterns();
        this.preparePatterns();
    }

    /**
     * Loads all avalible avaliblePatterns
     *
     * @returns {void}
     */
    private loadPatterns() {
        this._avaliblePatterns = require("../../../resources/patterns-list.json");
    }

    /**
     * Links avaliblePatterns with their modules
     *
     * @returns {void}
     */
    private preparePatterns() {
        this.linkPatternModules();
    }

    /**
     * Link avaliblePatterns with them modules
     *
     * @returns {void}
     */
    private linkPatternModules(): void {
        for (let patternIndex in this._avaliblePatterns) {
            let currentPattern: Pattern = this._avaliblePatterns[patternIndex];
            currentPattern.runner = this.findModule(currentPattern);
        }
    }

    /**
     * Try to find bootstrap function for pattern
     *
     * @param {number} targetPatternNumber - number of pattern in list
     * @returns {Pattern}
     */
    public findPatternRunner(targetPatternNumber: number) {
        return this._avaliblePatterns.find((currentPattern: Pattern, currentPatternIndex: number) => {
            return currentPatternIndex == targetPatternNumber;
        }).runner;
    }

    /**
     * Try to find a runner by pattern type name and pattern name
     * if runner didn't find it will pass error
     * only show warning
     *
     * @param {Pattern} targetPattern
     */
    private findModule(targetPattern: Pattern) {
        try {
            return require(`../../patterns/${targetPattern.type.toLowerCase()}/${targetPattern.name.toLowerCase()}`).bootstrap;
        }
        catch (e) {
            console.warn(`Module for pattern ${targetPattern.name.toUpperCase()} not found!`)
        }
    }


    get avaliblePatterns(): Pattern[] {
        return this._avaliblePatterns;
    }
}