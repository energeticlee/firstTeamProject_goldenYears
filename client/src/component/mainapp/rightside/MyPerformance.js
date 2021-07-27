import React from "react";
import Graph1 from "./graphs/Graph1";
import Graph2 from "./graphs/Graph2";
import Graph3 from "./graphs/Graph3";
import Graph4 from "./graphs/Graph4";
import Graph5 from "./graphs/Graph5";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";

const MyPerformance = () => {
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/session", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHPATIENTID", payload: message });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);
  return (
    <>
      <Graph1 />
      <Graph2 />
      <Graph3 />
      <Graph4 />
      <Graph5 />
    </>
  );
};

export default MyPerformance;
