import * as React from 'react';

// Singleton class
class SingletonClass {
  private static instance: SingletonClass;
  private data: string;

  private constructor() {
    this.data = 'Singleton Instance';
  }

  public static getInstance(): SingletonClass {
    if (!SingletonClass.instance) {
      SingletonClass.instance = new SingletonClass();
    }
    return SingletonClass.instance;
  }

  public getData(): string {
    return this.data;
  }
}

export const Singleton = () => {
  // Usage
  const singleton1 = SingletonClass.getInstance();
  const singleton2 = SingletonClass.getInstance();

  console.log(singleton1.getData()); // Output: Singleton Instance
  console.log(singleton2.getData()); // Output: Singleton Instance
  console.log(singleton1 === singleton2); // Output: true

  return <h2>{'Singleton'}</h2>;
};
