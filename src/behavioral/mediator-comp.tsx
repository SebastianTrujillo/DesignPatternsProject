import * as React from 'react';

// Mediator interface
interface Mediator {
  sendMessage(message: string, sender: Colleague): void;
}

// Colleague abstract class
abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  public abstract receiveMessage(message: string): void;

  public abstract send(message: string): void;
}

// Concrete Colleague 1
class ConcreteColleague1 extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public receiveMessage(message: string): void {
    console.log('ConcreteColleague1 received: ' + message);
  }

  public send(message: string): void {
    console.log('ConcreteColleague1 sends: ' + message);
    this.mediator.sendMessage(message, this);
  }
}

// Concrete Colleague 2
class ConcreteColleague2 extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public receiveMessage(message: string): void {
    console.log('ConcreteColleague2 received: ' + message);
  }

  public send(message: string): void {
    console.log('ConcreteColleague2 sends: ' + message);
    this.mediator.sendMessage(message, this);
  }
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private colleague1: ConcreteColleague1;
  private colleague2: ConcreteColleague2;

  public setColleague1(colleague1: ConcreteColleague1): void {
    this.colleague1 = colleague1;
  }

  public setColleague2(colleague2: ConcreteColleague2): void {
    this.colleague2 = colleague2;
  }

  public sendMessage(message: string, sender: Colleague): void {
    if (sender === this.colleague1) {
      this.colleague2.receiveMessage(message);
    } else if (sender === this.colleague2) {
      this.colleague1.receiveMessage(message);
    }
  }
}

export const MediatorComp = () => {
  // Usage
  const mediator = new ConcreteMediator();

  const colleague1 = new ConcreteColleague1(mediator);
  const colleague2 = new ConcreteColleague2(mediator);

  mediator.setColleague1(colleague1);
  mediator.setColleague2(colleague2);

  colleague1.send('Hello from Colleague1'); // Output: ConcreteColleague1 sends: Hello from Colleague1
  colleague2.send('Hi from Colleague2'); // Output: ConcreteColleague2 sends: Hi from Colleague2

  return <h2>{'Mediator'}</h2>;
};
