/**
 * Design Pattern Prototype
 *
 * Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.
 */

abstract class Prototype {
    constructor(protected _id: number) {
    };

    clone(targetObject: object) {
        Object.assign(targetObject, this);
    }
}

class PrototypeA extends Prototype {
    private innerField = "Specific Data";
}

class PrototypeB extends Prototype {
    private anotherInnerData = "Another Data"
}

export function run() {
    // Declare all avalible prototypes
    const prototypeA = new PrototypeA(123);
    const prototypeB = new PrototypeB(321);

    // Make copies

    // Correct copy
    let copyA = {};
    prototypeA.clone(copyA);

    // Wrong Copy
    let copyB = prototypeB;

    console.log(`Is Copy A the same as PrototypeA? Answer - ${copyA === prototypeA ? "yes" : "no"}`);
    console.log(`Is Copy B the same as PrototypeB? Answer - ${copyB === prototypeB ? "yes" : "no"}`);
}