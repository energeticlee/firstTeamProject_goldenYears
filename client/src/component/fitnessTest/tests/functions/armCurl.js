import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../../App";

const armCurl = (reducerPackage) => {
  const contextData = useContext(dataContext);
  const states = contextData.states;

  const history = useHistory();
  const { state, actions, dispatch } = reducerPackage;

  const armCurlCounter = () => {
    if (state.repPhase === "up") {
      dispatch({ type: actions.setEndTime, payload: Date.now() });
    }
    if (state.elbowAngle > 150) {
      dispatch({ type: actions.setRepPhase, payload: "down" });
      if (state.repCount === 0)
        dispatch({ type: actions.setStartTime, payload: Date.now() });
      else dispatch({ type: actions.setEndTime, payload: Date.now() });
    }

    if (state.elbowAngle < 40) {
      dispatch({ type: actions.setEndTime, payload: Date.now() });
      if (state.repPhase === "down") {
        dispatch({ type: actions.setRepPhase, payload: "up" });
        dispatch({ type: actions.setRepCount, payload: 1 });
      }
    }
    //! Change back to 30 Seconds
    if (
      Math.floor((Date.now() - state.startTime) / 1000) === state.armCurlTime
    ) {
      console.log(state.repCount);
      dispatch({ type: actions.setCompleted, payload: true });
    }
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.elbowAngle > 10 && !state.completed)
      armCurlCounter(state.elbowAngle);
  }, [state.elbowAngle]);

  useEffect(() => {
    if (state.elbowAngle > 10 && state.completed) {
      fetch("/api/fitnesstest/armcurl", {
        method: "POST",
        body: JSON.stringify({
          date: Date.now(),
          result: state.repCount,
          user: states.userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Error in network");
        })
        .then((resJson) => {
          console.log(resJson);
          dispatch({ type: actions.setReset });
          history.push("/home/tests");
        });
    }
  }, [state.completed]);
};

export default armCurl;
