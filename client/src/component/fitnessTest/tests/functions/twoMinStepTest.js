import { useEffect } from "react";

//! Alternating Hip trigger

const twoMinStepTest = (reducerPackage) => {
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
      console.log(state.repCount);
      dispatch({ type: actions.setRepPhase, payload: "up" });
      dispatch({ type: actions.setRepCount, payload: 1 });
    }
    //! Change back to 120 Seconds
    if (Math.floor((Date.now() - state.startTime) / 1000) === 10) {
      console.log(state.repCount);
      dispatch({ type: actions.setCompleted, payload: true });
      dispatch({ type: actions.setRepCount, payload: 0 });
    }
  };

  const testResult = (state) => {
    dispatch({
      type: actions.setResultStepTest,
      payload: state.repCount,
    });
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.rightHipAngle > 10 && !state.completed) twoMinStepTestCounter();
  }, [state.rightHipAngle, state.leftHipAngle]);

  useEffect(() => {
    if (state.rightHipAngle > 10 && state.completed) testResult(state);
  }, [state.completed]);
};

export default twoMinStepTest;
