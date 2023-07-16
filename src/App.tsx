import * as React from 'react';
import './style.css';
import { FactoryMethod } from './creational/factory-method';
import { Prototype } from './creational/prototype';
import { Singleton } from './creational/singleton';
import { Adapter } from './structural/adapter';
import { Facade } from './structural/facade';
import { Bridge } from './structural/bridge';
import { Mediator } from './behavioral/mediator';
import { Observer } from './behavioral/observer';
import { Strategy } from './behavioral/strategy';

export default function App() {
  return (
    <div>
      <h1>{'Creational Design Patterns'}</h1>
      <FactoryMethod />
      <Prototype />
      <Singleton />
      <h1>{'Structural Design Patterns'}</h1>
      <Adapter />
      <Facade />
      <Bridge />
      <h1>{'Behavioral Design Patterns'}</h1>
      <Mediator />
      <Observer />
      <Strategy />
    </div>
  );
}
