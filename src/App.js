import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")  
  
  const setNameInput = (event) => {
    setName (event.target.value)
  }

  const setAgeInput = (event) => {
    setAge (event.target.value)
  }
  
  const convert = (event) => {
    var upperCaseName = name.toUpperCase()
    setName(upperCaseName)
  }
  
return (

    <div className="App">
    <h1>List of Name & Age</h1>
    Name: <input type="" value={name} onChange={setNameInput}></input><br/><br/>
    Age: <input type="" value={age} onChange={setAgeInput}></input><br/><br/>
    <button onClick={convert}>convert</button>
    {name}, {age}


    </div>
  )

}

export default App;
