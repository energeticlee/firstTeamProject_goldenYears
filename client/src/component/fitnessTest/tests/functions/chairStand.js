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
    if (state.hipAngle > 10) squatCounter(state.kneeAngle);
  }, [state.hipAngle]);

  useEffect(() => {
    if (state.hipAngle > 10) testResult(state);
  }, [state.endTime]);
};

export default chairStand;
