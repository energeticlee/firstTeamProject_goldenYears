import calculateJointAngle from "./calculateJointAngle";

const renderJointAngle = (jointCoordinate, confidenceScore, reducerPackage) => {
  const { dispatch, actions } = reducerPackage;

  //! Elbow
  const currentElblowAngle = calculateJointAngle(
    jointCoordinate.rightShoulder,
    jointCoordinate.rightElbow,
    jointCoordinate.rightWrist,
    confidenceScore
  );

  //! Knee
  const currentKneeAngle = calculateJointAngle(
    jointCoordinate.rightHip,
    jointCoordinate.rightKnee,
    jointCoordinate.rightAnkle,
    confidenceScore
  );

  //! Hip
  const currentHipAngle = calculateJointAngle(
    jointCoordinate.rightShoulder,
    jointCoordinate.rightHip,
    jointCoordinate.rightKnee,
    confidenceScore
  );

  dispatch({ type: actions.setElbowAngle, payload: currentElblowAngle });
  dispatch({ type: actions.setKneeAngle, payload: currentKneeAngle });
  dispatch({ type: actions.setHipAngle, payload: currentHipAngle });
};

export default renderJointAngle;
