import Pattern from "./Pattern";

export default class PatternLoader {
    private patterns: Pattern[];

    constructor() {
        this.loadPatterns();
        this.preparePatterns();
    }

    /**
     * Loads all avalible patterns
     *
     * @returns {void}
     */
    private loadPatterns() {
        this.patterns = require("../../../resources/patterns-list.json");
    }

    /**
     * Links patterns with their modules
     *
     * @returns {void}
     */
    private preparePatterns() {
        this.linkPatternModules();
    }

    /**
     * Link patterns with them modules
     *
     * @returns {void}
     */
    private linkPatternModules(): void {
        for (let patternIndex in this.patterns) {
            let currentPattern: Pattern = this.patterns[patternIndex];
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
        return this.patterns.find((currentPattern: Pattern, currentPatternIndex: number) => {
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
            return require(`../../patterns/${targetPattern.type.toLowerCase()}/${targetPattern.name.toLowerCase()}`).run;
        }
        catch (e) {
            console.warn(`Module for pattern ${targetPattern.name.toUpperCase()} not found!`);
        }
    }

    /**
     * Return all avalible patterns
     *
     * @returns {Pattern[]}
     */
    get avaliblePatterns(): Pattern[] {
        return this.patterns;
    }
}