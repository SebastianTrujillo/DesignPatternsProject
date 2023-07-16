import * as React from 'react';

// Subject (Observable)
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: string;

  public getState(): string {
    return this.state;
  }

  public setState(state: string): void {
    this.state = state;
    this.notify();
  }

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}

// Observer
interface Observer {
  update(state: string): void;
}

// Concrete Observer 1
class ConcreteObserver1 implements Observer {
  public update(state: string): void {
    console.log('ConcreteObserver1: State changed to', state);
  }
}

// Concrete Observer 2
class ConcreteObserver2 implements Observer {
  public update(state: string): void {
    console.log('ConcreteObserver2: State changed to', state);
  }
}

export const ObserverComp = () => {
  // Usage
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserver1();
  subject.attach(observer1);

  const observer2 = new ConcreteObserver2();
  subject.attach(observer2);

  subject.setState('Ready');
  // Output:
  // ConcreteObserver1: State changed to Ready
  // ConcreteObserver2: State changed to Ready

  subject.detach(observer1);

  subject.setState('Done');
  // Output:
  // ConcreteObserver2: State changed to Done

  return <h2>{'Observer'}</h2>;
};
