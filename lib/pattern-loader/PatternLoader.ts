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
        this.linkPatternRunners();
    }

    /**
     * Link patterns with them modules
     *
     * @returns {void}
     */
    private linkPatternRunners(): void {
        for (let currentPattern of this.patterns) {
            let patternModule = this.findModule(currentPattern);

            if (patternModule) {
                currentPattern.runner = patternModule.run;
            }
        }
    }

    /**
     * Try to find runner function for pattern
     *
     * @param {number} targetPatternNumber - number of pattern
     * @returns {Pattern}
     */
    public findPatternRunner(targetPatternNumber: number) {
        return this.patterns[targetPatternNumber].runner;
    }

    /**
     * Try to find a runner function for pattern by type and name
     * if runner function didn't find it will pass error
     * only show warning
     *
     * @param {Pattern} targetPattern
     */
    private findModule(targetPattern: Pattern) {
        try {
            return require(`../../patterns/${targetPattern.type.toLowerCase()}/${targetPattern.name.toLowerCase()}`);
        }
        catch (error) {
            console.warn(`Error happend while loading module ${targetPattern.name.toUpperCase()}!`);
            console.log(error);
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