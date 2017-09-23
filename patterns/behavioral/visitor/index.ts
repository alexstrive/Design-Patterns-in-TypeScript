/**
 * Design Pattern Visitor
 *
 * In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existent object structures without modifying the structures. It is one way to follow the open/closed principle.
 *
 * In essence, the visitor allows adding new virtual functions to a family of classes, without modifying the classes. Instead, a visitor class is created that implements all of the appropriate specializations of the virtual function. The visitor takes the instance reference as input, and implements the goal through double dispatch.
 */

abstract class Visitor {
    public abstract visitElementA(elementA: ConcreteElementA);
    public abstract visitElementB(elementB);
}

class ConcreteVisitor extends Visitor {

    visitElementA(elementA: ConcreteElementA) {
        elementA.interact();
    }

    visitElementB(elementB: ConcreteElementB) {
        elementB.operation();
    }

}

abstract class Element {
    abstract accept(visitor: Visitor);
}

class ConcreteElementA extends Element {
    accept(visitor: Visitor) {
        visitor.visitElementA(this);
    }

    interact() {
        console.log("ConcreteElementA interacts with ...");
    }
}

class ConcreteElementB extends Element {
    accept(visitor: Visitor) {
        visitor.visitElementB(this);
    }

    operation() {
        console.log("ConcreteElementB operating with ...");
    }
}

class ObjectStructure {
    private elements: Element[] = [];

    attach(element) {
        this.elements.push(element);
    }

    accept(visitor: Visitor) {
        this.elements.forEach((element) => {
            element.accept(visitor);
        });
    }
}

export function run() {
    const objStructure = new ObjectStructure();
    const elemA = new ConcreteElementA();
    const elemB = new ConcreteElementB();

    objStructure.attach(elemA);
    objStructure.attach(elemB);

    objStructure.accept(new ConcreteVisitor());
}