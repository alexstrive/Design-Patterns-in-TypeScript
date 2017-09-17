import Pattern from "./PatternModule";

export default class PatternLoader {
    private _patterns: Pattern[] = require("../../../resources/patterns-list.json");

    constructor() {
        this.loadPatterns();
    }

    /**
     * Try to find bootstrap function for pattern
     *
     * @param {number} patternNumber - number of pattern in list
     * @returns {Pattern}
     */
    public findPatternBootstrap(patternNumber: number) {
        return this._patterns.find((currentPattern) => {
            return currentPattern.index == patternNumber;
        }).module.run;
    }

    /**
     * Loads and prepares all avalible patterns
     */
    private loadPatterns() {
        this.linkPatternIndexies();
        this.linkPatternModules();
    }

    /**
     * Link patterns with them indexies
     */
    private linkPatternIndexies(): void {
        for (let patternIndex in this._patterns) {
            this._patterns[patternIndex].index = +patternIndex
        }
    }

    /**
     * Link patterns with them modules
     */
    private linkPatternModules(): void {
        for (let patternIndex in this._patterns) {
            let currentPattern: Pattern = this._patterns[patternIndex];
            currentPattern.module = this.findModule(currentPattern);
        }
    }

    /**
     * Try to find a module by pattern type name and pattern name
     * if module didn't find it will pass error
     * only show warning
     *
     */
    private findModule(pattern) {
        try {
            return require(`../../patterns/${pattern.type.toLowerCase()}/${pattern.name.toLowerCase()}`)
        }
        catch (e) {
            console.warn(`Module for pattern ${pattern.name.toUpperCase()} not found!`)
        }
    }

    get patterns(): Pattern[] {
        return this._patterns;
    }
}