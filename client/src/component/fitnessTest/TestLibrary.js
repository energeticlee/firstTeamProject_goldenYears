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
    setHipAngle: "setHipAngle",
    setRepCount: "setRepCount",
    setRepPhase: "setRepPhase", //* can remove
    setStartTime: "setStartTime", //* set countdown timer
    setEndTime: "setEndTime",
    setResult: "setResult", //* 3 result ** use repCounter
  };

  const renderjointAngle = (state, action) => {
    switch (action.type) {
      case actions.setElbowAngle:
        return { ...state, elbowAngle: action.payload };
      case actions.setKneeAngle:
        return { ...state, kneeAngle: action.payload };
      case actions.setHipAngle:
        return { ...state, hipAngle: action.payload };
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
