import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

   let[count,setCount] = useState(0); 
  
    function change(){
       setCount("Button clicked"+count+1 +"times")
    }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={change}>click me</button>
    </div>
  );
}

export default App;
