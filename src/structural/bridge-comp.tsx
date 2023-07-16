import * as React from 'react';

// Abstraction
abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public abstract operation(): void;
}

// Refined Abstraction
class RefinedAbstraction extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  public operation(): void {
    console.log('RefinedAbstraction operation');
    this.implementor.implementation();
  }
}

// Implementor
interface Implementor {
  implementation(): void;
}

// Concrete Implementor A
class ConcreteImplementorA implements Implementor {
  public implementation(): void {
    console.log('ConcreteImplementorA implementation');
  }
}

// Concrete Implementor B
class ConcreteImplementorB implements Implementor {
  public implementation(): void {
    console.log('ConcreteImplementorB implementation');
  }
}

export const BridgeComp = () => {
  // Usage
  const implementorA = new ConcreteImplementorA();
  const abstractionA = new RefinedAbstraction(implementorA);
  abstractionA.operation();
  // Output:
  // RefinedAbstraction operation
  // ConcreteImplementorA implementation

  const implementorB = new ConcreteImplementorB();
  const abstractionB = new RefinedAbstraction(implementorB);
  abstractionB.operation();
  // Output:
  // RefinedAbstraction operation
  // ConcreteImplementorB implementation

  return <h2>{'Bridge'}</h2>;
};
