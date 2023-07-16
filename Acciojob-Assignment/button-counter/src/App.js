import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

   let[count,setCount] = useState(0); 
  
    function change(){
       setCount(count+1)
    }

  return (
    <div className="App" >
      <p>Button clicked {count} times</p>
      <button onClick={change}>click me</button>
    </div>
  );
}

export default App;
