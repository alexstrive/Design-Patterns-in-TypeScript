abstract class Component {
    abstract operation(): void;
}

class ConcreteComponent extends Component {
    operation(): void {
        console.log("ConcreteComponent.operation()");
    }
}

abstract class Decorator extends Component {
    private _component: Component;

    operation(): void {
        if (this._component) {
            this._component.operation();
        }
    }

    set component(value: Component) {
        this._component = value;
    }
}

class ConcreteDecoratorA extends Decorator {
    operation(): void {
        super.operation();
        console.log("ConcreteDecoratorA.operation()")
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): void {
        this.addedBehavior();
        super.operation();
        console.log("ConcreteDecoratorA.operation()")
    }

    private addedBehavior() {
        console.log("Some extra behavior");
    }
}

export function run() {
    let component = new ConcreteComponent();
    let decoratorA = new ConcreteDecoratorA();
    let decoratorB = new ConcreteDecoratorB();

    decoratorA.component = component;
    decoratorB.component = component;

    decoratorB.operation();
}