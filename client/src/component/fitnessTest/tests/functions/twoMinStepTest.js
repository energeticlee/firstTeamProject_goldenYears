import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../../App";

const twoMinStepTest = (reducerPackage) => {
  const contextData = useContext(dataContext);
  const states = contextData.states;
  const history = useHistory();
  const { state, actions, dispatch } = reducerPackage;

  const twoMinStepTestCounter = () => {
    if (state.rightHipAngle > 100 && state.leftHipAngle > 100) {
      dispatch({ type: actions.setRepPhase, payload: "down" });
      if (state.repCount === 0)
        dispatch({ type: actions.setStartTime, payload: Date.now() });
    }

    if (
      (state.rightHipAngle < 100 || state.leftHipAngle < 100) &&
      state.repPhase === "down"
    ) {
      dispatch({ type: actions.setRepPhase, payload: "up" });
      dispatch({ type: actions.setRepCount, payload: 1 });
    }
    //! Change back to 120 Seconds
    if (Math.floor((Date.now() - state.startTime) / 1000) === 10) {
      console.log(state.repCount);
      dispatch({ type: actions.setCompleted, payload: true });
    }
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.rightHipAngle > 10 && !state.completed) twoMinStepTestCounter();
  }, [state.rightHipAngle, state.leftHipAngle]);

  useEffect(() => {
    if (state.rightHipAngle > 10 && state.completed) {
      fetch("http://localhost:3333/api/fitnesstest/armcurl", {
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

export default twoMinStepTest;
