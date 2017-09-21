/**
 * Design Pattern Flyweight
 *
 *  A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.
 */

abstract class Flyweight {
    abstract operation(state: number): void;
}

class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map();

    constructor() {
        this.flyweights.set("X", new ConcreteFlyweight());
        this.flyweights.set("Y", new ConcreteFlyweight());
        this.flyweights.set("Z", new ConcreteFlyweight());
    }

    getFlyweight(key: string) {
        return this.flyweights.get(key);
    }
}

class ConcreteFlyweight extends Flyweight {
    operation(state: number): void {
        console.log(`ConcreteFlyweight ${state}`);
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    operation(state: number): void {
        console.log(`UnsharedConcreteFlyweight ${state}`)
    }
}

export function run() {
    let state = 23;

    let factory = new FlyweightFactory();

    let fx = factory.getFlyweight("X");
    fx.operation(--state);

    let fy = factory.getFlyweight("Y");
    fy.operation(--state);

    let fz = factory.getFlyweight("Z");
    fz.operation(--state);

    let fu = new UnsharedConcreteFlyweight();
    fu.operation(--state);
}