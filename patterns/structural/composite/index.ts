/**
 * Design Pattern Composite
 *
 * The composite pattern describes a group of objects that is treated the same way as a single instance of the same type of object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.
 */

abstract class Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract add(component: Component);

    abstract remove(component: Component);

    abstract display(depth: number);
}

class Composite extends Component {
    private childrens: Component[] = [];

    add(component: Component) {
        this.childrens.push(component);
    }

    remove(component: Component) {
        // TODO: implement method
        throw Error("No implementation for this method");
        // this.childrens.splice(this.childrens.findIndex(component), 1);
    }

    display(depth: number=0) {
        console.log(`${"-".repeat(depth)}+ ${this.name}`);

        for (let component of this.childrens) {
            component.display(depth + 2);
        }
    }
}

class Leaf extends Component {

    add(component: Component) {
        console.log("Cannot add to a leaf");
    }

    remove(component: Component) {
        console.log("Cannot remove from a leaf")
    }

    display(depth: number) {
        console.log(`${"-".repeat(depth + 1)} ${this.name}`);
    }
}

export function run() {
    let root: Composite = new Composite("root");
    root.add(new Leaf("Leaf A"));
    root.add(new Leaf("Leaf B"));

    let branchX: Composite = new Composite("Branch X");
    branchX.add(new Leaf("Leaf XA"));
    branchX.add(new Leaf("Leaf XB"));
    branchX.add(new Leaf("Leaf XC"));

    let branchY: Composite = new Composite("Branch Y");
    branchY.add(new Leaf("Leaf YA"));
    branchY.add(new Leaf("Leaf YB"));
    branchY.add(new Leaf("Leaf YC"));
    branchY.add(new Leaf("Leaf YD"));

    let branchXY: Composite = new Composite("Branch XY");

    branchXY.add(branchX);
    branchXY.add(branchY);
    root.add(branchXY);

    root.display();
}