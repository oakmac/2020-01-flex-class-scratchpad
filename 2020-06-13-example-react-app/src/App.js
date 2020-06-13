import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function HelloPerson (props) {
  return (
    <div>
      <h1>{props.fname} {props.lname}</h1>
      <hr />
    </div>
  )
}

function Counter (props) {
  let initialValue = 0
  if (props.initialValue) initialValue = parseInt(props.initialValue, 10)

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(initialValue);

  let myTitle = props.title
  if (!myTitle) myTitle = 'Counter value'

  return (
    <div>
      <h4>{myTitle}: {count}</h4>
      <HelloPerson fname="Counterface" lname={count} />
      <button onClick={() => setCount(count + 1)}>Plus One</button>
      <button onClick={() => setCount(count + 5)}>Plus Five</button>
      <button onClick={() => setCount(count - 1)}>Minus One</button>
      <hr />
    </div>
  );
}

function App () {
  return (
    <div>
      <HelloPerson fname="Chris" lname="Oakman" />
      <Counter title="Matt's Counter" initialValue="4" />
      <HelloPerson fname="Matt" lname="Alagala" />
      <Counter title="Banana counter"/>
      <HelloPerson fname="Shawn" lname="Benny" />
      <Counter />
      <HelloPerson fname="Matt" lname="Alagala" />
      <HelloPerson fname="Aubrey" lname="Snider" />
    </div>
  )
}

function App2 () {
  const [numCounters, setNumCounters] = useState(1000)

  const countersArr = [...Array(numCounters).keys()]

  // an alterative way to create an array of components:
  // let arrayOfCounterComponents = []
  // for (let i = 0; i < numCounters; i++) {
  //   arrayOfCounterComponents.push(<Counter />)
  // }
  // then render in the JSX like this:
  // {arrayOfCounterComponents}

  return (
    <div>
      <button onClick={() => setNumCounters(numCounters + 1)}>Add Counter</button>
      {countersArr.map((idx) => <Counter key={idx} />)}
    </div>
  )
}

export default App2;


// function App () {
//   return (
//     <div className="App banana foo">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
