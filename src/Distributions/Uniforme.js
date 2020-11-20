import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';


function Uniforme() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);
    
    console.log("a:"+a + ", b:"+b);
    
    return(
        <div>
        <Distribution name={"Uniforme Continua"} funcion={()=>1/(b-a)} />
        <NumberInput default={0} min={0} max={b-1} handleChange={(value)=> setA(value)} />
        <NumberInput default={1} min={a+1} max={100} handleChange={(value)=> setB(value)} />
        
        </div>
        
    )
}

export default Uniforme