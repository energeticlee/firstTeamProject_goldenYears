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

  //! Right Hip
  const currentRightHipAngle = calculateJointAngle(
    jointCoordinate.rightShoulder,
    jointCoordinate.rightHip,
    jointCoordinate.rightKnee,
    confidenceScore
  );
  //! Left Hip
  const currentLeftHipAngle = calculateJointAngle(
    jointCoordinate.leftShoulder,
    jointCoordinate.leftHip,
    jointCoordinate.leftKnee,
    confidenceScore
  );

  dispatch({ type: actions.setElbowAngle, payload: currentElblowAngle });
  dispatch({ type: actions.setKneeAngle, payload: currentKneeAngle });
  dispatch({ type: actions.setRightHipAngle, payload: currentRightHipAngle });
  dispatch({ type: actions.setLeftHipAngle, payload: currentLeftHipAngle });
};

export default renderJointAngle;
