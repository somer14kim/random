import './App.css';
import axios from "axios";
import {useState} from 'react';

const p = axios.get("https://www.boredapi.com/api/activity");

function App() {

  const [activity, setActivity] = useState("");


  p.then(response => {
    setActivity(response.data.activity);
  })
  return (
    <div className="App">
     <h1>{activity}</h1>
    </div>
  );
}

export default App;
