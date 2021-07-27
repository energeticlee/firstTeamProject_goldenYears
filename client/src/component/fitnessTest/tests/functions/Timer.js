import React from "react";
import PropTypes from "prop-types";

const Timer = ({ reducerPackage }) => {
  const { state } = reducerPackage;

  const currentTime =
    state.armCurlTime - Math.floor((state.endTime - state.startTime) / 1000);

  return (
    <div>
      {currentTime <= state.armCurlTime && currentTime > 0 ? (
        <h2>{currentTime} Seconds</h2>
      ) : (
        <h2>{state.armCurlTime} Seconds</h2>
      )}
    </div>
  );
};

Timer.propTypes = {
  reducerPackage: PropTypes.object,
};

export default Timer;
