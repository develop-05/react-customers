import React from 'react';
import {Navigation} from './components/Navigation/Navigation';
import {Customers} from './components/Customers/Customers';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.app__section}>
      <Navigation />
      <Customers />
    </div>
  );
}

export default App;
