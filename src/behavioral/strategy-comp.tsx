import * as React from 'react';

// Strategy interface
interface Strategy {
  execute(): void;
}

// Concrete Strategy 1
class ConcreteStrategy1 implements Strategy {
  public execute(): void {
    console.log('Executing ConcreteStrategy1');
  }
}

// Concrete Strategy 2
class ConcreteStrategy2 implements Strategy {
  public execute(): void {
    console.log('Executing ConcreteStrategy2');
  }
}

// Context
class Context {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public executeStrategy(): void {
    this.strategy.execute();
  }
}

export const StrategyComp = () => {
  // Usage
  const context = new Context();

  const strategy1 = new ConcreteStrategy1();
  context.setStrategy(strategy1);
  context.executeStrategy(); // Output: Executing ConcreteStrategy1

  const strategy2 = new ConcreteStrategy2();
  context.setStrategy(strategy2);
  context.executeStrategy(); // Output: Executing ConcreteStrategy2

  return <h2>{'Strategy'}</h2>;
};
