import * as React from 'react';

// Subsystem 1
class Subsystem1 {
  public operation1(): void {
    console.log('Subsystem 1: Operation 1');
  }

  public operation2(): void {
    console.log('Subsystem 1: Operation 2');
  }
}

// Subsystem 2
class Subsystem2 {
  public operation1(): void {
    console.log('Subsystem 2: Operation 1');
  }

  public operation2(): void {
    console.log('Subsystem 2: Operation 2');
  }
}

// Facade
class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  public operation(): void {
    console.log('Facade operation:');
    this.subsystem1.operation1();
    this.subsystem1.operation2();
    this.subsystem2.operation1();
    this.subsystem2.operation2();
  }
}

export const FacadeComp = () => {
  // Usage
  const facade = new Facade();
  facade.operation();

  return <h2>{'Facade'}</h2>;
};
