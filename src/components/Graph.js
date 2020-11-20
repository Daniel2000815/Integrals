import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = (props) => {
    const graphData= {
        labels: props.labels,
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192, 0.6)',
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
                                    autoSkip: true,
                                    beginAtZero: true,
                                    maxTicksLimit: 2
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
