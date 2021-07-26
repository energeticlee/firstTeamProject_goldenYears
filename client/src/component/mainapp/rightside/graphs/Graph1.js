/* eslint-disable */
import React,{useState, useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

export default function Graph1() {
const [data, setData] = useState([])

useEffect(() => {
  const getData = async () => {
    // Please change the localhose number according to your server port number
    const response = await fetch("http://localhost:3333/api/usertestdata", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data)
    setData(data);
  };
  getData();
}, []);

  // const data = [
  //   {
  //     date: 1610640000000,
  //     result: 5,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1613750400000,
  //     result: 7,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1617033600000,
  //     result: 12,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1617206400000,
  //     result: 11,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1621440000000,
  //     result: 7,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1624982400000,
  //     result: 3,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1626278400000,
  //     result: 20,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  //   {
  //     date: 1628524800000,
  //     result: 25,
  //     user: {
  //       uniqueId: "myID",
  //       name: "hello",
  //       email: "helloe",
  //       password: "test",
  //     },
  //   },
  // ];

  const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;
    const value = moment(payload.value).format("D MMM YY ");

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {value}
        </text>
      </g>
    );
  };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <ul className="custom-tooltip">
  //         <li className="label">
  //           Date: {`${moment(label).format("D MMM YY ")}`}
  //         </li>
  //         <li className="intro">Result: {`${payload[0].value}`}</li>
  //       </ul>
  //     );
  //   }

  //   return null;
  // };

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
          dataKey="date"
          height={60}
          tick={<CustomizedAxisTick />}
          domain={["auto", "auto"]}
          type="number"
        />
        <YAxis />
        <Tooltip
          labelFormatter= {function (value) {
            return `Date: ${moment(value).format("D MMM YY ")}`;
          }}
          formatter = {function (value) {
            return [`${value}`, "Result" ]
          }}
        />
        <Legend 
        formatter = {function (value) {
          return ["Result"]
        }}/>
        <Line type="monotone" dataKey="result" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
