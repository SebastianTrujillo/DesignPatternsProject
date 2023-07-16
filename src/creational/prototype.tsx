import * as React from 'react';

// Prototype interface
interface Prototype {
  clone(): Prototype;
}

// Concrete prototype
class ConcretePrototype implements Prototype {
  private property: string;

  constructor(property: string) {
    this.property = property;
  }

  public clone(): Prototype {
    // Create a new instance of the same concrete prototype class
    const clone = new ConcretePrototype(this.property);
    return clone;
  }

  public getProperty(): string {
    return this.property;
  }
}

export const Prototype = () => {
  // Usage
  const prototype = new ConcretePrototype('Prototype');
  const clone = prototype.clone();

  console.log(prototype.getProperty()); // Output: Prototype
  console.log(clone.getProperty()); // Output: Prototype

  return <h2>{'Prototype'}</h2>;
};
