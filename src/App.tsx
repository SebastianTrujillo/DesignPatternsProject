import * as React from 'react';
import './style.css';
import { shape } from './design-patterns';

export default function App() {
  console.log(shape.draw());

  return (
    <div>
      <h1>Factory Method</h1>
    </div>
  );
}
