import * as React from 'react';

// Prototype interface
interface Prototype {
  clone(): Prototype;
  getInfo(): void;
}

// Concrete prototype
class ConcretePrototype implements Prototype {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public clone(): Prototype {
    return new ConcretePrototype(this.name);
  }

  public getInfo(): void {
    console.log(`Prototype name: ${this.name}`);
  }
}

export const PrototypeComp = () => {
  // Usage
  const prototype1 = new ConcretePrototype('Prototype 1');
  const clone1 = prototype1.clone();
  prototype1.getInfo(); // Output: Prototype name: Prototype 1
  clone1.getInfo(); // Output: Prototype name: Prototype 1

  return <h2>{'Prototype'}</h2>;
};
