import './App.css';

import { CartesianGrid, CustomAxisTick, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import React, { Component } from 'react';

import logo from './logo.svg';

const data = [{
    name: '9:00 pm',
    'Stage 1': 4000,
    'Stage 2': 2400,
    ai: 1000,
    amt: 2400
  },
  {
    name: '10:00 pm',
    'Stage 1': 3000,
    'Stage 2': 1398,
    ai: 1700,
    amt: 2210
  },
  {
    name: '11:00 pm',
    'Stage 1': 2000,
    'Stage 2': 9800,
    ai: 2200,
    amt: 2290
  },
  {
    name: '12:00 am',
    'Stage 1': 2780,
    'Stage 2': 3908,
    ai: 3100,
    amt: 2000
  },
  {
    name: '1:00 am',
    'Stage 1': 1890,
    'Stage 2': 4800,
    ai: 4500,
    amt: 2181
  },
  {
    name: '2:00 am',
    'Stage 1': 2390,
    'Stage 2': 3800,
    ai: 2700,
    amt: 2500
  },
  {
    name: '3:00 am',
    'Stage 1': 3490,
    'Stage 2': 4300,
    ai: 2000,
    amt: 2100
  },
];
class App extends Component {
  render() {
    return (
      <div className="App">
       	<LineChart width={1600} height={1100} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Stage 1" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Stage 2" stroke="#82ca9d" />
       <Line type="monotone" dataKey="Stage 3" stroke="#000000" />
      </LineChart>
      </div>
    );
  }
}

export default App;
