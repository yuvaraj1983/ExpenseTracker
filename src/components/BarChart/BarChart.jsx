import React from 'react'
import "./BarChart.css";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

const BarChartContainer = ({data}) => {
  return (
   <>
    <h3 className='barchartheader'>Bar Chart</h3>
    <div className='barchartlist'>
    
    <ResponsiveContainer width="100%" height={280}>
        <BarChart  data={data} layout='vertical'>
          <XAxis type="number"  axisLine={false} display="none"/>
          <YAxis type="category"  width={100} dataKey="name"  
  axisLine={false}/>

          <Bar dataKey="value" fill="#8884d8" barSize={25} />
        
        </BarChart>
      </ResponsiveContainer>

    

    </div>
   </>
       
   
  )
}

export default BarChartContainer