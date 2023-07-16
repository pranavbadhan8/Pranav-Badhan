import React from "react";

import { useState } from "react";


function Button(){

    let[count,setCount] = useState(0); 
  
        function change(){
            setCount(count+1)
        }
   

    return(
      <div className>
      <p>Button clicked {count} times</p>
      <button onClick={change}>click me</button>
    </div>
    )
}

export default Button;