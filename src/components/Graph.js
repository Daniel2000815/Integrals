import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = (props) => {
    console.log("min: " + props.labels.indexOf(props.min) + ", bb:" + props.labels.indexOf(props.max));
    console.log([...props.data].slice(props.labels.indexOf(props.min), props.labels.indexOf(props.max)));
    let minPos = props.labels.indexOf(props.min);
    let maxPos = props.labels.indexOf(props.max);
    let dataCopy = [...props.data];

    for(var i=0; i<dataCopy.length; i++){
        if(i<minPos || i>maxPos){
            dataCopy[i] = 0;
        }
    }

    const graphData= {
        labels: props.labelsSimple,
        datasets: [
            {
                label: "2",
                backgroundColor: "rgba(0, 181, 204, 0.6)",
                highlightStroke: "rgba(220,220,220,0.6)",
                borderWidth: 0,
                data: dataCopy,
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)'
              },
            {
            label: "1",
            backgroundColor: "rgba(30, 139, 195, 0.6)",
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 0,
            data: props.data,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)'
            }
          

        ]
    }

    return (
        <span><div style={{ width: "500px" }}>
            <Line
                data={graphData}
                options={{
                    legend:{
                        display: false,
                    },
                   responsive: true,
                   title: {text: "Función de Densidad", display: true},
                   scales:{
                       yAxes:[
                           {
                               ticks:{
                                    beginAtZero: true,
                               }
                           }
                       ],
                       xAxes:[
                        {
                            ticks:{
                                autoSkip: false
                            },
                            gridLines:{
                                display: false
                            }
                        }
                    ]
                   }
                }}
            />
        </div></span>
    );
}

export default Graph
