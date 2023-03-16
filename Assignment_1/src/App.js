import React,{useState,useRef} from "react";

function App(){
    const input1=useRef(null);
    const input2=useRef(null);
    const [bmi,setBmi]=useState();
    
    const calculateBmi=()=>{
        const height=parseInt(input1.current.value)/100;
        const weight=parseInt(input2.current.value);
        setBmi(weight/(Math.pow(height,2)));
    }

    return(
        <div>
            <div>
                <label>Enter Height(in cm) 
                    <input ref={input1} type="text" />
                </label>
                <label>Enter weight(in kg)
                    <input ref={input2} type="text" />
                </label>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <p>BMI= {bmi}</p>
        </div>
    );
}

export default App;