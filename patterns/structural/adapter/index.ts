/**
 * Design Pattern - Adapter
 *
 * An adapter allows two incompatible interfaces to work together.
 *
 * Adapter/Wrapper - Converts one interface to another so that it matches what the client is expecting
 * Decorator - Dynamically adds responsibility to the interface by wrapping the original code
 * Delegation - Support "composition over inheritance"
 * Facade - Provides a simplified interface
 */

class Target {
    request() {
        console.log("Called Target Request()")
    }
}

class Adapter extends Target {
    // Object that we want adaptee
    private adaptee: Adaptee = new Adaptee();

    request() {
        console.log('Redirect method to adaptee.');
        this.adaptee.specificRequest();
    }
}

class Adaptee {
    specificRequest() {
        console.log("Called SpecificRequest()")
    }
}

export function run() {
    let target: Target = new Adapter();
    target.request();
}