import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';

function Uniforme() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);
    
    console.log("a:"+a + ", b:"+b);
    console.log("minB:"+ (a+1) + ", maxA:"+(b-1));
    return(
        <div>
        <NumberInput text={"a"} default={0} handleChange={(e)=> setA(e.target.value)} />
        <NumberInput text={"b"} default={1} handleChange={(e)=> setB(e.target.value)} />
        <Distribution funcion={()=>1/(b-a)} />
        <RangeSlider max={100} min={0}/>
        </div>
        
    )
}

export default Uniforme