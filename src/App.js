import { useState, useEffect } from 'react'
import axios from 'axios'

// Parent 
const App = () => {

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/').then((resp) => {
      setData({
        name: "",
        names: resp.data.users
      })
    })
  }, [])


  const [data, setData] = useState({
    name: "",
    age: 0,
    names: []
  });

  const onChangeAge = (event) => {
    const names = data.names;
    setData({
      name: data.name,
      age: event.target.value,
      names: names
    });
  };
  const onChangeFunction = (event) => {
    const names = data.names;
    setData({
      name: event.target.value,
      age: data.age,
      names: names
    });
  };
  const updateNames = () => {
    const names = data.names;
    names.push({ name: data.name, age: data.age })
    setData({
      name: data.name,
      age: data.age,
      names: names
    });
  }

  return (
    <div className="App">
      <h2>{data.name}</h2>
      <input onChange={(n) => onChangeFunction(n)} />
      <input onChange={(a) => onChangeAge(a)} />
      {data.names.map((user, index) => <div style={{ display: "flex", rowGap: "2rem", boxShadow: "0px 0px 5px gray", borderRadius: "2rem" }}>
        <Namer name={user.name} age={user.age} index={index} />
      </div>)}
      <button onClick={updateNames}>update</button>
    </div>
  );
}

// Child component
const Namer = ({ name, age, index }) => {
  return <div >
    <h2>{name}</h2>
    <h3> {age}</h3>
  </div>
}

export default App;
