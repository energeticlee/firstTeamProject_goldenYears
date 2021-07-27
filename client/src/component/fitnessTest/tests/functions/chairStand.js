import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../../App";

const chairStand = (reducerPackage) => {
  const contextData = useContext(dataContext);
  const states = contextData.states;
  const history = useHistory();
  const { state, actions, dispatch } = reducerPackage;

  const squatCounter = () => {
    if (state.kneeAngle < 120) {
      dispatch({ type: actions.setRepPhase, payload: "down" });
      if (state.repCount === 0)
        dispatch({ type: actions.setStartTime, payload: Date.now() });
    }

    if (state.kneeAngle > 160 && state.repPhase === "down") {
      dispatch({ type: actions.setRepPhase, payload: "up" });
      dispatch({ type: actions.setRepCount, payload: 1 });
    }
    //! Change back to 30 Seconds
    if (Math.floor((Date.now() - state.startTime) / 1000) === 5) {
      console.log(state.repCount);
      dispatch({ type: actions.setCompleted, payload: true });
    }
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.hipAngle > 10 && !state.completed) squatCounter(state.kneeAngle);
  }, [state.hipAngle]);

  useEffect(() => {
    if (state.hipAngle > 10 && state.completed) {
      fetch("http://localhost:3333/api/fitnesstest/chairstand", {
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

export default chairStand;
