/**
 * Design Pattern Facade
 *
 * The Facade design pattern is often used when a system is very complex or difficult to understand because the system has a large number of interdependent classes or its source code is unavailable. This pattern hides the complexities of the larger system and provides a simpler interface to the client. It typically involves a single wrapper class that contains a set of members required by client. These members access the system on behalf of the facade client and hide the implementation details.
 */

class SubSystemOne {
    methodOne() {
        console.log("SubSystemOne method");
    }
}

class SubSystemTwo {
    methodTwo() {
        console.log("SubSystemTwo method");
    }
}

class SubSystemThree {
    methodThree() {
        console.log("SubSystemThree method");
    }
}

class SubSystemFour {
    methodFour() {
        console.log("SubSystemFour method");
    }
}

class Facade {
    private subSystemOne: SubSystemOne = new SubSystemOne();
    private subSystemTwo: SubSystemTwo = new SubSystemTwo();
    private subSystemThree: SubSystemThree = new SubSystemThree();
    private subSystemFour: SubSystemFour = new SubSystemFour();

    methodA() {
        console.log("MethodA called:");
        this.subSystemOne.methodOne();
        this.subSystemTwo.methodTwo();
        this.subSystemFour.methodFour();
    }

    methodB() {
        console.log("MethodB called:");
        this.subSystemTwo.methodTwo();
        this.subSystemThree.methodThree();
    }
}

export function run() {
    let facade = new Facade();

    facade.methodA();
    facade.methodB();
}