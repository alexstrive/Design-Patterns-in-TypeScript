/**
 * Design Pattern Factory Method
 *
 * Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
 */

abstract class Product {
    abstract showInfo();
}

class ProductA extends Product {
    showInfo() {
        console.log('Called ProductA#showInfo')
    }
}

class ProductB extends Product {
    showInfo() {
        console.log('Called ProductB#showInfo')
    }
}

abstract class Creator {
    public abstract factoryMethod(): Product;
}

class CreatorA extends Creator {
    public factoryMethod(): Product {
        return new ProductA();
    }
}

class CreatorB extends Creator {
    public factoryMethod(): Product {
        return new ProductB();
    }
}

export function run() {
    const creatorA: Creator = new CreatorA();
    const productA = creatorA.factoryMethod();
    productA.showInfo();

    const creatorB: Creator = new CreatorB();
    const productB = creatorB.factoryMethod();
    productB.showInfo();
}