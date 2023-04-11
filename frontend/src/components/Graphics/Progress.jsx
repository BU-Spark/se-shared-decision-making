import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const strokeWidth = 20;
const size = 200;
const center = size / 2;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

// interface ProgressProps {
//     offset: string
// }

const Progress = (props) => {
    const data = {
        labels: ['',''],
        datasets: [
            {
                label: '',
                data: [100-Number(props.offset),Number(props.offset)],
                backgroundColor: ['rgb(255, 255, 255)','rgb(12,58,37)'],
            }
            
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Doughnut Chart',
                color:'blue',
                font: {
                    size:34
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            }
        }
    }

    const plugins = [{
      beforeDraw: function(chart) {
       var width = chart.width,
           height = chart.height,
           ctx = chart.ctx;
           ctx.restore();
           var fontSize = (height / 160).toFixed(2);
           ctx.font = fontSize + "em sans-serif";
           ctx.textBaseline = "top";
           var text = `${props.centerText?props.centerText:''}`,
           textX = Math.round((width - ctx.measureText(text).width) / 2),
           textY = height / 2;
           ctx.fillText(text, textX, textY);
           ctx.save();
      } 
    }]


    return ( 
        <div>
          <Doughnut data={data} plugins={plugins} options={options} />
        </div>
     );
}
  
 
export default Progress;