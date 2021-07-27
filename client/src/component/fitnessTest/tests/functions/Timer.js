import React from "react";
import PropTypes from "prop-types";

const Timer = ({ reducerPackage, name }) => {
  const { state } = reducerPackage;
  const duration =
    name === "Step Test"
      ? state.twoMinStepTime
      : name === "Arm Curl"
      ? state.armCurlTime
      : state.chairStandTime;

  const currentTime =
    duration - Math.floor((state.endTime - state.startTime) / 1000);

  return (
    <div>
      {currentTime <= duration && currentTime > 0 ? (
        <h2>{currentTime} Seconds</h2>
      ) : (
        <h2>{duration} Seconds</h2>
      )}
    </div>
  );
};

Timer.propTypes = {
  reducerPackage: PropTypes.object,
  name: PropTypes.string,
};

export default Timer;
