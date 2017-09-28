/**
 * Design Pattern State
 *
 * The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass.
 */

abstract class State {
    abstract handle(context: Context): void;
}

class StateA extends State {
    handle(context: Context): void {
        console.log('State A have handled request');
        context.state = new StateB();
    }
}

class StateB extends State {
    handle(context: Context): void {
        console.log('State B have handled request');
        context.state = new StateA();
    }
}

class Context {
    private _state: State;

    constructor(state: State) {
        this._state = state;
    }

    request(): void {
        this.state.handle(this);
    }

    get state(): State {
        return this._state;
    }

    set state(value: State) {
        this._state = value;
    }
}


export function run() {
    const context = new Context(new StateA());

    // Behavioral of requests will change at different states
    context.request();
    context.request();
    context.request();
    context.request();
}