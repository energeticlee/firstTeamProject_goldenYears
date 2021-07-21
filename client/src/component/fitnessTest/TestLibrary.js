import React, { useReducer } from "react";
import PoseEstimation from "./tests/PoseEstimation";
import chairStand from "./tests/functions/chairStand";

const TestLibrary = () => {
  const actions = {
    setElbowAngle: "setElbowAngle",
    setKneeAngle: "setKneeAngle",
    setShoulderAngle: "setShoulderAngle",
    setHipAngle: "setHipAngle",
    setRepCount: "setRepCount",
    setRepPhase: "setRepPhase",
    setStartTime: "setStartTime",
    setEndTime: "setEndTime",
    setResult: "setResult",
  };

  const renderjointAngle = (state, action) => {
    switch (action.type) {
      case actions.setElbowAngle:
        return { ...state, elbowAngle: action.payload };
      case actions.setKneeAngle:
        return { ...state, kneeAngle: action.payload };
      case actions.setHipAngle:
        return { ...state, hipAngle: action.payload };
      case actions.setShoulderAngle:
        return { ...state, shoulderAngle: action.payload };
      case actions.setRepCount:
        return {
          ...state,
          repCount: (state.repCount + action.payload) * action.payload,
        };
      case actions.setRepPhase:
        return { ...state, repPhase: action.payload };
      case actions.setStartTime:
        return { ...state, startTime: action.payload };
      case actions.setEndTime:
        return { ...state, endTime: action.payload };
      case actions.setResult:
        return { ...state, result: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(renderjointAngle, {
    //! 3 Test
    bicepCurl: false,
    FRSTS: true,
    elbowAngle: 0,
    shoulderAngle: 0,
    kneeAngle: 0,
    hipAngle: 0,
    repCount: 0,
    repPhase: "",
    startTime: 0,
    endTime: 0,
    result: 0,
  });

  const reducerPackage = { state, dispatch, actions };

  return (
    <div>
      <h1>Testing Library</h1>
      <div>
        {/* Create list of test */}
        <div>
          <a href="/">
            <img src="" alt="test1" />
            <h2>30-Second Chair Stand</h2>
          </a>
          <PoseEstimation reducerPackage={reducerPackage} props={chairStand} />
        </div>
        <div>
          <a href="/">
            <img src="" alt="test2" />
            <h2>Arm Curl</h2>
          </a>
        </div>
        <div>
          <a href="/">
            <img src="" alt="test3" />
            <h2>2-Minute Step Test</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestLibrary;
