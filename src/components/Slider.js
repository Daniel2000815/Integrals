import { Slider, Switch } from 'antd';
import { useState } from 'react';


const RangeSlider = (props) => {
    //const [v, setV] = useState(0);

    return(
        <div>
        <span style={{width:props.width, float:"right"}}>
        <Slider 
            range defaultValue={[props.min, props.max]} 
            step={props.step} 
            min={props.min} 
            max={props.max} 
            onAfterChange={props.handleChange}
            disabled={props.disabled}
        />
        </span>
        </div>
    )
}

export default RangeSlider