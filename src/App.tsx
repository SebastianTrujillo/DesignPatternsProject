import * as React from 'react';
import './style.css';
import { factoryMethodName } from './design-patterns/factory-method';
import { prototypeName } from './design-patterns/prototype';
import { singletonName } from './design-patterns/singleton';
import { adapterName } from './design-patterns/adapter';
import { facadeName } from './design-patterns/facade';
import { bridgeName } from './design-patterns/bridge';
import { mediatorName } from './design-patterns/mediator';
import { observerName } from './design-patterns/observer';
import { strategyName } from './design-patterns/strategy';

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
