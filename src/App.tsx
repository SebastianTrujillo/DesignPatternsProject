import * as React from 'react';
import './style.css';
import { factoryMethodName } from './creational/factory-method';
import { prototypeName } from './creational/prototype';
import { singletonName } from './creational/singleton';
import { adapterName } from './structural/adapter';
import { facadeName } from './structural/facade';
import { bridgeName } from './structural/bridge';
import { mediatorName } from './behavioral/mediator';
import { observerName } from './behavioral/observer';
import { strategyName } from './behavioral/strategy';

export default function App() {
  return (
    <div>
      <h1>{'Creational Design Patterns'}</h1>
      <h2>{factoryMethodName}</h2>
      <h2>{prototypeName}</h2>
      <h2>{singletonName}</h2>
      <h1>{'Structural Design Patterns'}</h1>
      <h2>{adapterName}</h2>
      <h2>{facadeName}</h2>
      <h2>{bridgeName}</h2>
      <h1>{'Behavioral Design Patterns'}</h1>
      <h2>{mediatorName}</h2>
      <h2>{observerName}</h2>
      <h2>{strategyName}</h2>
    </div>
  );
}
