/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  Area,
} from "recharts";
import moment from "moment";
import { dataContext } from "../../../../App";


export default function Graph6() {
    const [data, setData] = useState([]);
    const contextData = useContext(dataContext);
    console.log(contextData);
    const states = contextData.states;

    useEffect(() => {
        const getData = async () => {
          // Please change the localhose number according to your server port number
          const response = await fetch(
            `http://localhost:3333/api/usertestdata/1/${states.userId}`,
            {
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          console.log(response);
          const data = await response.json();
          console.log(data);
          setData(data);
        };
        getData();
      }, []);

  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="result" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
