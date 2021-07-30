import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import PoseEstimation from "./tests/PoseEstimation";
import chairStand from "./tests/functions/chairStand";
import armCurl from "./tests/functions/armCurl";
import twoMinStepTest from "./tests/functions/twoMinStepTest";
import { useRouteMatch } from "react-router";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../App";
import style from "./TestLibrary.module.css";
import TestSelection from "./testSelection";
//* Add score to useReducer, and render overall result here then Post result to DB.

const TestLibrary = () => {
  let { path } = useRouteMatch();
  const data = useContext(dataContext);
  const userdispatch = data.dispatch;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/session", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          userdispatch({ type: "PUSHPATIENTID", payload: message });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);
  const actions = {
    setElbowAngle: "setElbowAngle",
    setShoulderAngle: "setShoulderAngle",
    setKneeAngle: "setKneeAngle",
    setRightHipAngle: "setRightHipAngle",
    setLeftHipAngle: "setLeftHipAngle",
    setRepCount: "setRepCount",
    setRepPhase: "setRepPhase",
    setStartTime: "setStartTime",
    setEndTime: "setEndTime",
    setCompleted: "setCompleted",
    setReset: "setReset",
  };

  const renderjointAngle = (state, action) => {
    switch (action.type) {
      case actions.setElbowAngle:
        return { ...state, elbowAngle: action.payload };
      case actions.setShoulderAngle:
        return { ...state, shoulderAngle: action.payload };
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
      case actions.setEndTime:
        return { ...state, endTime: action.payload };
      case actions.setCompleted:
        return { ...state, completed: action.payload };
      case actions.setReset:
        return {
          ...state,
          repCount: 0,
          repPhase: "",
          startTime: 0,
          endTime: 0,
          completed: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(renderjointAngle, {
    //! onClick - Reset Score && set completed to false
    elbowAngle: 0,
    shoulderAngle: 0,
    kneeAngle: 0,
    rightHipAngle: 0,
    leftHipAngle: 0,
    repCount: 0,
    repPhase: "",
    startTime: 0,
    endTime: 0,
    completed: false,
    chairStandTime: 10,
    armCurlTime: 10,
    twoMinStepTime: 10,
  });

  const reducerPackage = { state, dispatch, actions };

  return (
    <div className={style.mainContainer}>
      <main>
        <Switch>
          <Route exact path={path}>
            <TestSelection />
          </Route>
          <Route path={`${path}/chairstand`}>
            <PoseEstimation
              reducerPackage={reducerPackage}
              props={chairStand}
              name={"Chair Stand"}
            />
          </Route>

          <Route path={`${path}/armcurl`}>
            <PoseEstimation
              reducerPackage={reducerPackage}
              props={armCurl}
              name={"Arm Curl"}
            />
          </Route>

          <Route path={`${path}/twominsteptest`}>
            <PoseEstimation
              reducerPackage={reducerPackage}
              props={twoMinStepTest}
              name={"Step Test"}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default TestLibrary;
