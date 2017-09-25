/**
 * Design pattern Builder
 *
 * Separate the construction of a complex object from its representation so that the same construction process can create different representations.
 */

class Director {
    construct(builder: Builder): void {
        builder.buildPartFirst();
        builder.buildPartSecond();
    }
}

class Product {
    private parts: string[] = [];

    add(part: string): void {
        this.parts.push(part);
    }

    show(): void {
        console.log("#Product Parts: ");
        for (let part of this.parts) {
            console.log(part);
        }
    }
}

abstract class Builder {
    protected product: Product = new Product();

    abstract buildPartFirst(): void;

    abstract buildPartSecond(): void;

    getResult() {
        return this.product;
    }
}

class Manager {

}

class ConcreteBuilderAB extends Builder {
    buildPartFirst(): void {
        this.product.add("A");
    }

    buildPartSecond(): void {
        this.product.add("B");
    }
}

class ConcreteBuilderXY extends Builder {
    buildPartFirst(): void {
        this.product.add("X");
    }

    buildPartSecond(): void {
        this.product.add("Y");
    }
}

export function run() {
    let director = new Director();

    let builderAB = new ConcreteBuilderAB();
    director.construct(builderAB);
    let productAB = builderAB.getResult();
    productAB.show();

    let builderXY = new ConcreteBuilderXY();
    director.construct(builderXY);
    let productXY = builderXY.getResult();
    productXY.show();
}