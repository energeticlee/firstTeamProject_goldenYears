import React, { useReducer } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PoseEstimation from "./tests/PoseEstimation";
import chairStand from "./tests/functions/chairStand";
import armCurl from "./tests/functions/armCurl";
import twoMinStepTest from "./tests/functions/twoMinStepTest";

//* Add score to useReducer, and render overall result here then Post result to DB.

const TestLibrary = () => {
  const actions = {
    setElbowAngle: "setElbowAngle",
    setKneeAngle: "setKneeAngle",
    setRightHipAngle: "setRightHipAngle",
    setLeftHipAngle: "setLeftHipAngle",
    setRepCount: "setRepCount",
    setRepPhase: "setRepPhase",
    setStartTime: "setStartTime",
    setCompleted: "setCompleted",
    setResultArmCurl: "setResultArmCurl", //* Use repCounter
    setResultStepTest: "setResultStepTest",
    setResultChairStand: "setResultChairStand",
  };

  const renderjointAngle = (state, action) => {
    switch (action.type) {
      case actions.setElbowAngle:
        return { ...state, elbowAngle: action.payload };
      case actions.setKneeAngle:
        return { ...state, kneeAngle: action.payload };
      case actions.setRightHipAngle:
        return { ...state, rightHipAngle: action.payload };
      case actions.setLeftHipAngle:
        return { ...state, leftHipAngle: action.payload };
      case actions.setRepCount:
        return {
          ...state,
          repCount: (state.repCount + action.payload) * action.payload,
        };
      case actions.setRepPhase:
        return { ...state, repPhase: action.payload };
      case actions.setStartTime:
        return { ...state, startTime: action.payload };
      case actions.setCompleted:
        return { ...state, completed: action.payload };
      case actions.setResultArmCurl:
        return { ...state, resultArmCurl: action.payload };
      case actions.setResultStepTest:
        return { ...state, resultStepTest: action.payload };
      case actions.setResultChairStand:
        return { ...state, resultChairStand: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(renderjointAngle, {
    //! Reset Score && set completed to false onClick
    elbowAngle: 0,
    kneeAngle: 0,
    rightHipAngle: 0,
    leftHipAngle: 0,
    repCount: 0,
    repPhase: "",
    startTime: 0,
    completed: false,
    resultArmCurl: 0,
    resultStepTest: 0,
    resultChairStand: 0,
  });

  const reducerPackage = { state, dispatch, actions };

  return (
    <div>
      <h1>Testing Library</h1>
      <div>
        <div>
          <Link to="chairStand">
            <h2>30-Second Chair Stand</h2>
          </Link>
        </div>
        <div>
          <Link to="armCurl">
            <h2>Arm Curl</h2>
          </Link>
        </div>
        <div>
          <Link to="twoMinStepTest">
            <h2>2-Minute Step Test</h2>
          </Link>
        </div>
      </div>
      <main>
        <Switch>
          <Route path="/chairStand">
            <PoseEstimation
              reducerPackage={reducerPackage}
              props={chairStand}
            />
          </Route>
          <Route path="/armCurl">
            <PoseEstimation reducerPackage={reducerPackage} props={armCurl} />
          </Route>
          <Route path="/twoMinStepTest">
            <PoseEstimation
              reducerPackage={reducerPackage}
              props={twoMinStepTest}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default TestLibrary;
