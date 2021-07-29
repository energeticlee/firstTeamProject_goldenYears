/* eslint-disable */
import React, { useCallback, useState, useContext, useEffect } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { dataContext } from "../../../../App";
import moment from "moment";

export default function Graph4(props) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  // const contextData = useContext(dataContext);
  // const states = contextData.states;
  // console.log(states);

  const urls = [
    `/api/usertestdata/1/${props.data}`,
    `/api/usertestdata/2/${props.data}`,
    `/api/usertestdata/3/${props.data}`,
  ];
  useEffect(() => {
    if (props.data!==undefined){
    Promise.all(
      urls.map((url) =>
        fetch(url)
          // .then(checkStatus)  // check the response of our APIs
          .then((response) => {
            return response.json();
          }) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    ).then((data) => {
      setData1(data[0]);
      setData2(data[1]);
      setData3(data[2]);
    });
  }
  }, [props.data]);

  const unixdate = moment().subtract(props.time.number,props.time.mode).format("x")
  // console.log(moment(date).format("MMM Do YY"))
  console.log(unixdate)
  const filtereddata1 = []
  const filtereddata2 = []
  const filtereddata3 = []
  
  for (const items of data1){
    if (items.date > unixdate){
      filtereddata1.push(items)
    } 
  }
  console.log("filtered1",filtereddata1)

  for (const items of data2){
    if (items.date > unixdate){
      filtereddata2.push(items)
    } 
  }
  console.log("filtered2",filtereddata2)

  for (const items of data3){
    if (items.date > unixdate){
      filtereddata3.push(items)
    } 
  }
  console.log("filtered3",filtereddata3)

let result1 = 0
  for (const items of filtereddata1){
result1 += items.result
  }
  console.log(result1)
  // console.log(data1)

  let result2 = 0
  for (const items of filtereddata2){
result2 += items.result
  }
  console.log(result2)
  // console.log(data2)

  let result3 = 0
  for (const items of filtereddata3){
result3 += items.result
  }
  console.log(result3)
  // console.log(data3)

  const data = [
    { name: "30-Second Chair Stand", value: result1 },
    { name: "Arm Curls", value: result2},
    { name: "2-Minute Step Test", value: result3},
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`Total Score: ${value} Reps`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return data1.length !== 0 && data2.length !== 0 && data3.length !== 0 ? 
    <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        // cx={200}
        // cy={200}
        innerRadius={90}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
    </ResponsiveContainer>
  
  :<p>Please complete all three tests!</p>
}
