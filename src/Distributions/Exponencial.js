import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';




function Exponencial() {
    const [lambda, setLambda] = useState(1);
    const[min,setMin] = useState(1);
    const[max,setMax] = useState(1);

    return(
        <div>
            Rango de la función:
            <span ><RangeSlider width="1110px" max={5} min={0} handleChange={(value) => {setMin(value[0]); setMax(value[1])}}/></span>

            <span style={{position:"left", width:"100px"}}><NumberInput text={"λ"} default={0} handleChange={(e)=> setLambda(Number(e.target.value))} /></span>

        <Distribution 
            min={min}
            max={max}
            funcion={(x)=>(lambda * Math.E**(-lambda * x))} 
            media = {1/lambda}
            varianza = {1/(lambda**2)}
            step = {0.01}
            stringMedia= {"E[X]=\\frac{1}{\\lambda}"}
            stringVarianza={"Var[X]=\\frac{1}{\\lambda^2}"}
            stringDesviacion={"\\sigma(X)=\\frac{1}{\\lambda}"}
            stringFuncionDensidad={"f(x)=\\lambda e^{-\\lambda x}"}
            stringFuncionMasa={"F(x)=1-e^{-\\lambda x}"}
            stringFuncionMomentos={"M(t)="}
        />
        </div>
        
    )
}

export default Exponencial;