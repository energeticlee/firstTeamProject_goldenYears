import { useEffect } from "react";

const chairStand = (reducerPackage) => {
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
      dispatch({ type: actions.setRepCount, payload: 0 });
    }
  };

  const testResult = (state) => {
    dispatch({
      type: actions.setResultChairStand,
      payload: state.repCount,
    });
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.hipAngle > 10 && !state.completed) squatCounter(state.kneeAngle);
  }, [state.hipAngle]);

  useEffect(() => {
    if (state.hipAngle > 10 && state.completed) testResult(state);
  }, [state.completed]);
};

export default chairStand;
