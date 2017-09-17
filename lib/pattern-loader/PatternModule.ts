import PatternModule from "./Pattern";

export default interface Pattern {
    name: string,
    type: string,
    index: number,
    module: PatternModule
}
