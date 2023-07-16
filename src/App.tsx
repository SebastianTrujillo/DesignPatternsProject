import * as React from 'react';
import './style.css';
import { FactoryMethodComp } from './creational/factory-method-comp';
import { PrototypeComp } from './creational/prototype-comp';
import { SingletonComp } from './creational/singleton-comp';
import { AdapterComp } from './structural/adapter-comp';
import { FacadeComp } from './structural/facade-comp';
import { BridgeComp } from './structural/bridge-comp';
import { MediatorComp } from './behavioral/mediator-comp';
import { ObserverComp } from './behavioral/observer-comp';
import { StrategyComp } from './behavioral/strategy-comp';

export default function App() {
  return (
    <div>
      <h1>{'Creational Design Patterns'}</h1>
      <FactoryMethodComp />
      <PrototypeComp />
      <SingletonComp />
      <h1>{'Structural Design Patterns'}</h1>
      <AdapterComp />
      <FacadeComp />
      <BridgeComp />
      <h1>{'Behavioral Design Patterns'}</h1>
      <MediatorComp />
      <ObserverComp />
      <StrategyComp />
    </div>
  );
}
