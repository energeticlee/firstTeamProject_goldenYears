import { useEffect } from "react";

const armCurl = (reducerPackage) => {
  const { state, actions, dispatch } = reducerPackage;

  const armCurlCounter = () => {
    if (state.elbowAngle > 150) {
      dispatch({ type: actions.setRepPhase, payload: "down" });
      if (state.repCount === 0)
        dispatch({ type: actions.setStartTime, payload: Date.now() });
    }

    if (state.elbowAngle < 40 && state.repPhase === "down") {
      dispatch({ type: actions.setRepPhase, payload: "up" });
      dispatch({ type: actions.setRepCount, payload: 1 });
      console.log(state.repCount);
    }
    //! Change back to 30 Seconds
    if (Math.floor((Date.now() - state.startTime) / 1000) === 5) {
      console.log(state.repCount);
      dispatch({ type: actions.setCompleted, payload: true });
      dispatch({ type: actions.setRepCount, payload: 0 });
    }
  };

  //! Create result and push to cloud
  //! Route to test page

  const testResult = (state) => {
    dispatch({
      type: actions.setResultArmCurl,
      payload: state.repCount,
    });
  };

  useEffect(() => {
    //* Run this while test is ongoing
    if (state.elbowAngle > 10 && !state.completed)
      armCurlCounter(state.elbowAngle);
  }, [state.elbowAngle]);

  useEffect(() => {
    //* Run this when test is completed
    if (state.elbowAngle > 10 && state.completed) testResult(state);
  }, [state.completed]);
};

export default armCurl;
