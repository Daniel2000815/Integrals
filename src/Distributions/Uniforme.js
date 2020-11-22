import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';

function Uniforme() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);

    console.log("a:"+a + ", b:"+b);
    console.log("minB:"+ (b+a));
    return(
        <div>
            <span><NumberInput text={"a"} default={0} handleChange={(e)=> setA(Number(e.target.value))} /></span>
            <span><NumberInput text={"b"} default={1} handleChange={(e)=> setB(Number(e.target.value))} /></span>
            <span ><RangeSlider width="1110px" max={100} min={0} /></span>
        
        <Distribution 
            funcion={()=>1/(b-a)} 
            media = {(b+a)/2}
            varianza = {(b-a)**2 / 12}
        />
        </div>
        
    )
}

export default Uniforme