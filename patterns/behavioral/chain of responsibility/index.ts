/**
 * Design Pattern Chain of Responsobility
 *
 * The pattern chains the receiving objects together, and then passes any request messages from object to object until it reaches an object capable of handling the message. The number and type of handler objects isn't known a priori, they can be configured dynamically. The chaining mechanism uses recursive composition to allow an unlimited number of handlers to be linked.
 *
 * Chain of Responsibility simplifies object interconnections. Instead of senders and receivers maintaining references to all candidate receivers, each sender keeps a single reference to the head of the chain, and each receiver keeps a single reference to its immediate successor in the chain.
 */

abstract class Handler {
    private _successor: Handler;

    abstract handlerEvent(request: number);

    protected delegateEvent(event) {
        this.successor.handlerEvent(event);
    }

    set successor(value: Handler) {
        this._successor = value;
    }

    get successor(): Handler {
        return this._successor;
    }
}

class ConcreteHandlerA extends Handler {
    handlerEvent(request: number) {
        if (request >= 0 && request < 10) {
            console.log("Request handled by Concrete Handler A");
        }
        else {
            this.delegateEvent(request);
        }
    }
}

class ConcreteHandlerB extends Handler {
    handlerEvent(request: number) {
        if (request >= 10 && request < 100) {
            console.log("Request handled by Concrete Handler B");
        }
        else {
            this.delegateEvent(request);
        }
    }
}


class ConcreteHandlerC extends Handler {
    handlerEvent(request: number) {
        if (request >= 100) {
            console.log("Request handled by Concrete Handler C");
        }
        else {
            this.delegateEvent(request);
        }
    }
}


export function run() {
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();
    const handlerC = new ConcreteHandlerC();

    handlerA.successor = handlerB;
    handlerB.successor = handlerC;

    handlerA.handlerEvent(110);
}