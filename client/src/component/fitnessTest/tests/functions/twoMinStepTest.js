import { useEffect } from "react";

//! Alternating trigger

const twoMinStepTest = (reducerPackage) => {
  const { state, actions, dispatch } = reducerPackage;

  const twoMinStepTestCounter = () => {
    if (state.kneeAngle > 150) {
      dispatch({ type: actions.setRepPhase, payload: "down" });
      if (state.repCount === 0)
        dispatch({ type: actions.setStartTime, payload: Date.now() });
    }

    if (state.kneeAngle < 40 && state.repPhase === "down") {
      dispatch({ type: actions.setRepPhase, payload: "up" });
      dispatch({ type: actions.setRepCount, payload: 1 });
    }
    if (state.repCount === 5) {
      dispatch({ type: actions.setEndTime, payload: Date.now() });
      dispatch({ type: actions.setRepCount, payload: 0 });
    }
  };

  const testResult = (state) => {
    dispatch({
      type: actions.setResult,
      payload: ((state.endTime - state.startTime) / 1000).toFixed(1),
    });
  };

  useEffect(() => {
    if (state.kneeAngle > 10) twoMinStepTestCounter(state.kneeAngle);
  }, [state.kneeAngle]);

  useEffect(() => {
    if (state.kneeAngle > 10) testResult(state);
  }, [state.endTime]);
};

export default twoMinStepTest;
