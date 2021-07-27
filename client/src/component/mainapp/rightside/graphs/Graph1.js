/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
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
  AreaChart,
  Area,
} from "recharts";
import moment from "moment";
import { dataContext } from "../../../../App";

export default function Graph1() {
  const [data, setData] = useState([]);
  const contextData = useContext(dataContext);
  const states = contextData.states;

  useEffect(() => {
    const getData = async () => {
      // Please change the localhose number according to your server port number
      const response = await fetch(
        `/api/usertestdata/1/${states.userId}`,
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setData(data);
    };
    getData();
  }, []);

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
  if (data.length === 0) {
    return null;
  } else
    return (
      <ResponsiveContainer width="100%" height={300}>
        {/* <p>2-Minute Step Test</p> */}
        <AreaChart
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
            labelFormatter={function (value) {
              return `Date: ${moment(value).format("D MMM YY ")}`;
            }}
            formatter={function (value) {
              return [`${value}`, "Result"];
            }}
          />
          <Legend
            formatter={function (value) {
              return ["Result"];
            }}
          />

          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="result"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#color)"
            activeDot={{ r: 6 }}
            dot={{strokeWidth: 1 ,fill:"white"}}
          >
            {/* <LabelList content={<CustomizedLabel />} /> */}
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    );
}
