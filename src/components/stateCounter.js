import { useState } from 'react'
const StateCounter = () => {
    const [count, setCount] = useState(0);
    
    const increment = function(){
        setCount(count + 1);  
    }
    const decrement = function(){
        setCount(count - 1);  
    }
    const reset = function(){
        setCount(0);  
    }
    return ( 
    <div>
        <h1>Incrementing and Decrementing using State</h1>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
        <br></br>
        <button onClick={reset}>Reset</button>
    </div> );
}
 
export default StateCounter;