import React from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';


const Uniforme = (props) => {
    return(
        <div>
        <Distribution name={"Uniforme Continua"} funcion={()=>(props.a*props.b)/2} />
        <NumberInput text={"a"} />
        </div>
        
    )
}

export default Uniforme