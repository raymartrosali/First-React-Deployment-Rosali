import { useRef,useEffect } from "react";
import RenderCounter from "../components/renderCounter";


const UseReferencePage = () => {
    const selectingElements = useRef();
    useEffect(()=>{
        alert("Rendered Something");
    });
    const getValue = function(){
        alert(selectingElements.current.value);
    }
    const changeValue = function(){
        selectingElements.current.value = "Changed Value";
    }
    const getClass = function(){
        alert(selectingElements.current.classList);
    }
    return ( 
        <div>
            <h1>Use Reference Page</h1>
            <input ref={selectingElements} type="text" className="SampleClass BasicClass" />
            <button onClick={getValue}>Get Value of text</button>
            <button onClick={changeValue}>Change Value of Text</button>
            <button onClick={getClass}>Get the Classlist of Text</button>
            <hr></hr>
            <RenderCounter></RenderCounter>
        </div>
     );
}
 
export default UseReferencePage;