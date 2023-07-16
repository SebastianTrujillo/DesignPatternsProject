import * as React from 'react';

// Product interface
interface Product {
  operation(): void;
}

// Concrete product 1
class ConcreteProduct1 implements Product {
  operation(): void {
    console.log('ConcreteProduct1 operation');
  }
}

// Concrete product 2
class ConcreteProduct2 implements Product {
  operation(): void {
    console.log('ConcreteProduct2 operation');
  }
}

// Creator class
class Creator {
  createProduct(type: string): Product {
    switch (type) {
      case 'product1':
        return new ConcreteProduct1();
      case 'product2':
        return new ConcreteProduct2();
      default:
        throw new Error('Invalid product type');
    }
  }
}

export const FactoryMethod = () => {
  // Usage
  const creator = new Creator();

  const product1 = creator.createProduct('product1');
  product1.operation(); // Output: ConcreteProduct1 operation

  const product2 = creator.createProduct('product2');
  product2.operation(); // Output: ConcreteProduct2 operation

  return <h2>{'Factory Method'}</h2>;
};
