import { useRef, useState, useEffect } from "react";
const RenderCounter = () => {
    
    const [value, setValue] = useState('');
    const renderCount = useRef(0);
    const displayValue = function(e){
        setValue(e.target.value);
    }
    useEffect( ()=>{
        renderCount.current++;
    })

    const selectingElements = useRef();
    const changeValue = function(){
        selectingElements.current.value = "Changed Value";
    }
    return ( 
    <div>
        <input ref={selectingElements} type="text" onChange={displayValue} />
        <h1>{value}</h1>
        <h3>Render Count: {renderCount.current}</h3>
        <button onClick={changeValue}>Change Value of Text</button>
    </div> 
    );
}
 
export default RenderCounter;