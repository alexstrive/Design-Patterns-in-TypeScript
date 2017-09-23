/**
 * Design Pattern Abstract Factory
 *
 * The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes. In normal usage, the client software creates a concrete implementation of the abstract factory and then uses the generic interface of the factory to create the concrete objects that are part of the theme. The client doesn't know (or care) which concrete objects it gets from each of these internal factories, since it uses only the generic interfaces of their products.[1] This pattern separates the details of implementation of a set of objects from their general usage and relies on object composition, as object creation is implemented in methods exposed in the factory interface.
 *
 * The essence of the Abstract Factory Pattern is to "Provide an interface for creating families of related or dependent objects without specifying their concrete classes."
 */

abstract class Product {
    constructor(public name) {
    }
}

abstract class AbstractEnchantedProduct extends Product {
    public abstract interact(product: Product);
}

class CommonProduct extends Product {
}

class EnchantedProduct extends AbstractEnchantedProduct {

    public interact(product: Product) {
        console.log(`${this.name} interacts with ${product.name}`)
    }
}

class MoreEnchantedProduct extends AbstractEnchantedProduct {
    interact(product: Product) {
        console.log(`${this.name} interacts with CommonProduct ${product.name}`);
    }

    showName() {
        console.log(this.name);
    }
}

abstract class AbstractFactory {
    abstract createCommonProduct(productName: string): Product;
    abstract createEnchantedProduct(): Product;
}

class Factory extends AbstractFactory {
    createCommonProduct(productName: string): CommonProduct {
        return new CommonProduct(`CommonProduct ${productName}`);
    }

    createEnchantedProduct(): EnchantedProduct {
        return new EnchantedProduct("EnchantedProduct")
    }
}

class FactoryPlus extends AbstractFactory {
    createCommonProduct(productName: string): CommonProduct {
        return new CommonProduct(productName);
    }

    createEnchantedProduct(): MoreEnchantedProduct {
        return new MoreEnchantedProduct("MoreEnchantedProduct");
    }
}

export function run() {
    const factory = new Factory();
    let productA = factory.createCommonProduct("A");
    let productB = factory.createCommonProduct("B");
    let productC = factory.createCommonProduct("C");
    let productEnch = factory.createEnchantedProduct();

    productEnch.interact(productA);
    productEnch.interact(productB);
    productEnch.interact(productC);

    const factoryPlus = new FactoryPlus();
    let productD = factoryPlus.createCommonProduct("D");
    let productMoreEcnh = factoryPlus.createEnchantedProduct();

    productMoreEcnh.interact(productD);
}