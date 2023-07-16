import * as React from 'react';

// Target interface
interface Target {
  request(): void;
}

// Adaptee class
class Adaptee {
  specificRequest(): void {
    console.log('Adaptee specific request');
  }
}

// Adapter class
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): void {
    console.log('Adapter request');
    this.adaptee.specificRequest();
  }
}

export const AdapterComp = () => {
  // Usage
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);

  adapter.request();

  return <h2>{'Adapter'}</h2>;
};
