import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';




function Normal() {
    const [mu, setMu] = useState(1);
    const [sigma, setSigma] = useState(1);
    const[min,setMin] = useState(1);
    const[max,setMax] = useState(1);

    return(
        <div>
            Rango de la función:
            <span ><RangeSlider width="1110px" max={mu+(2*sigma)} min={mu-(2*sigma)} handleChange={(value) => {setMin(value[0]); setMax(value[1])}}/></span>

            <span style={{position:"left", width:"100px"}}><NumberInput text={"μ"} default={0} handleChange={(e)=> setMu(Number(e.target.value))} /></span>
            <span><NumberInput text={"σ"} default={1} handleChange={(e)=> setSigma(Number(e.target.value))} /></span>

        <Distribution 
            min={min}
            max={max}
            funcion={(x)=>(1/(sigma * (2*Math.PI)**(0.5)) * Math.E**(-((x-mu)**2)/(2*sigma**2)))} 
            media = {mu}
            varianza = {mu}
            step = {0.01}
            stringMedia= {"E[X]=\\mu"}
            stringVarianza={"Var[X]=\\mu"}
            stringDesviacion={"\\sigma(X)=\\sigma"}
            stringFuncionDensidad={"f(x)=\\frac{1}{\\sigma \\sqrt{2\\pi}}"}
            stringFuncionMasa={"F(x)="}
            stringFuncionMomentos={"M(t)="}
        />
        </div>
        
    )
}

export default Normal