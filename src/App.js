import React, {useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const persons = [{
    name: "Katleho",
    age: 38
  },
  {
    name: "Thabang",
    age: 36
  },
  {
    name: "Kedisaletse",
    age: 37
  }
]
const [personState, setPersonState] = useState({persons});
const swichNameHandler = (isName) => {
  persons[0].name = isName;
  setPersonState({
    persons
  })
  console.log(personState.persons);
  console.log("Changed but not updating");
}

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={() => swichNameHandler("Katleho Archiebald")}>Press me</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} click={() => swichNameHandler("Testing")}>Testing hobbies</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default App;
