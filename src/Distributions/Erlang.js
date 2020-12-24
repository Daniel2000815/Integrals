import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';
import {factorial} from '../Libraries/MyMath';



function Erlang() {
    const [lambda, setLambda] = useState(1);
    const [k, setK] = useState(1);
    const[min,setMin] = useState(1);
    const[max,setMax] = useState(1);

    return(
        <div>
            Rango de la función:
            <span ><RangeSlider width="1110px" max={20} min={0} handleChange={(value) => {setMin(value[0]); setMax(value[1])}}/></span>

            <span style={{position:"left", width:"100px"}}><NumberInput text={"λ"} default={0} handleChange={(e)=> setLambda(Number(e.target.value))} /></span>
            <span style={{position:"left", width:"100px"}}><NumberInput text={"k"} default={0} handleChange={(e)=> setK(Number(e.target.value))} /></span>

        <Distribution 
            min={min}
            max={max}
            funcion={(x)=>(lambda * Math.E**(-lambda * x) * ((lambda*x)**(k-1))/(factorial(k-1)))} 
            media = {k/lambda}
            varianza = {k/(lambda**2)}
            step = {0.01}
            stringMedia= {"E[X]=\\frac{k}{\\lambda}"}
            stringVarianza={"Var[X]=\\frac{k}{\\lambda^2}"}
            stringDesviacion={"\\sigma(X)=\\frac{k}{\\lambda}"}
            stringFuncionDensidad={"f(x)=\\lambda e^{-\\lambda x} \\frac{(\\lambda x)^{k-1}}{(k-1)!}"}
            stringFuncionMasa={"F(x)=1-\\sum_{n=0}^{k-1}\\frac{e^{-\\lambda x}(\\lambda x)^n}{n!}"}
            stringFuncionMomentos={"M(t)="}
        />
        </div>
        
    )
}

export default Erlang;