import React from "react";

import { dataContext } from "../../../App";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const OverallPerformance = () => {
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/doctorsession", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHDOCTORID", payload: message._id });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);
  return (
    <div>
      <h1>Overall Performance</h1>
    </div>
  );
};

export default OverallPerformance;
