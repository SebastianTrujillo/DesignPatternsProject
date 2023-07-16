import * as React from 'react';

// Singleton class
class Singleton {
  private static instance: Singleton;
  private data: string;

  private constructor() {
    this.data = 'Singleton Instance';
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): string {
    return this.data;
  }
}

export const SingletonComp = () => {
  // Usage
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log(singleton1.getData()); // Output: Singleton Instance
  console.log(singleton2.getData()); // Output: Singleton Instance
  console.log(singleton1 === singleton2); // Output: true

  return <h2>{'Singleton'}</h2>;
};
