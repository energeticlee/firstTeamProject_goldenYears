/* eslint-disable */
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const data = [
  { pv: 14, name: 1503617297689 },
  { pv: 15, name: 1503616962277 },
  { pv: 15, name: 1503616882654 },
  { pv: 20, name: 1503613184594 },
  { pv: 15, name: 1503611308914 },
];

// const data = [
//   {
//     name: 'Page A',
//     pv: 2400,
//   },
//   {
//     name: 'Page B',
//     pv: 1398,
//   },
//   {
//     name: 'Page C',
//     pv: 9800,
//   },
//   {
//     name: 'Page D',
//     pv: 3908,
//   },
//   {
//     name: 'Page E',
//     pv: 4800,
//   },
//   {
//     name: 'Page F',
//     pv: 3800,
//   },
//   {
//     name: 'Page G',
//     pv: 4300,
//   },
// ];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={10}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    const value = moment(payload.value).format("DD:MM:YY ")
    console.log(Date.now())
    

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {value}
        </text>
      </g>
    );
  }
}

export default class Graph1 extends PureComponent {
  //   static demoUrl = 'https://codesandbox.io/s/line-chart-with-customized-label-hs5b7';

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            height={60}
            tick={<CustomizedAxisTick />}
            domain={["auto", "auto"]}
            type="number"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
