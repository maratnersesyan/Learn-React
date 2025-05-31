import { MyName } from "../myname/Myname.jsx";
import './App.css'
import { Email } from "../Email.jsx";
import React from "react";

function App() {
    const name = "DEEP PURPLE and LED ZEPPELIN"
    const element = <h1> {name} ЛУЧШИЕ ГРУППЫ</h1>
    const condition = true
  return (
      <>
          <h1>My Project</h1>
          <p>my first project React</p>
          {name}
          {condition && <span style={{color: 'red', fontSize: 20}}>{element}</span>}
          <MyName />
          <Email />
          <br />
          <input type='text' />
      </>
  )
}

export default App
