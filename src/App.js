import React, { useState } from 'react';
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
const [ showState, setVisibility] = useState(false);
const swichNameHandler = (isName) => {
  persons[0].name = isName;
  setPersonState({
    persons
  })
  console.log(personState.persons);
  console.log("Changed but not updating");
}

const changeName = (event) => {
  persons[1].name = event.target.value;
  setPersonState({persons});
}

const togglePersonHandler = () => {
  // const peopleDiv = document.querySelector(".allpeople");
  // const nextView = (peopleDiv.style.display === "none") ? "block" : "none";
  // peopleDiv.style.display = nextView;
  setVisibility(!showState);
}

const personsDiv = showState ? (
    <div className="allpeople">
    <Person name={personState.persons[0].name} age={personState.persons[0].age} click={() => swichNameHandler()}/>
    <Person name={personState.persons[1].name} age={personState.persons[1].age} change={changeName}>Testing hobbies</Person>
    <Person name={personState.persons[2].name} age={personState.persons[2].age} click={() => swichNameHandler()}/>
    </div>
  ) : null;

return (
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <button onClick={() => swichNameHandler("Katleho Archiebald")}>Press me</button>
    <button onClick={togglePersonHandler}>Toggle person</button>
    {personsDiv}
  </div>
);
}

export default App;
