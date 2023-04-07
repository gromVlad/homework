import React from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW2 from '../s2-homeworks/hw02/HW2'
import HW3 from '../s2-homeworks/hw03/HW3';

function App() {
    return (
      <div className={s.App}>
        <HW1 />
        <HW2 />
        <HW3 />
      </div>
    );
}

export default App
