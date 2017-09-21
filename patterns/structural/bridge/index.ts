/**
 * Design Pattern - Bridge
 *
 * Bridge pattern compose objects in tree structure. It decouples abstraction from implementation.
 */

interface Implementor {
    operation();
}

class Abstraction {
    private _implementor: Implementor;

    operation() {
        this._implementor.operation();
    }


    set implementor(value: Implementor) {
        this._implementor = value;
    }
}

class ConcreteImplementorA implements Implementor {
    operation() {
        console.log("ConcreteImplementorA operation called");
    }
}

class ConcreteImplementorB implements Implementor {
    operation() {
        console.log("ConcreteImplementorB operation called")
    }
}

export function run() {
    let abstraction = new Abstraction();

    abstraction.implementor = new ConcreteImplementorA();
    abstraction.operation();

    abstraction.implementor = new ConcreteImplementorB();
    abstraction.operation();

}