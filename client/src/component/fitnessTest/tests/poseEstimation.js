import React, { useRef, useEffect, useReducer } from "react";
import "@tensorflow/tfjs-backend-webgl";
import * as poseDetection from "@tensorflow-models/pose-detection";
import Webcam from "react-webcam";
import renderJointAngle from "./functions/renderJointAngle";
import style from "./Render.module.css";

const Render = () => {
  const jointCoordinate = {
    rightWrist: 0,
    rightElbow: 0,
    rightShoulder: 0,
    rightHip: 0,
    rightKnee: 0,
    rightAnkle: 0,
    leftWrist: 0,
    leftElbow: 0,
    leftShoulder: 0,
    leftHip: 0,
    leftKnee: 0,
    leftAnkle: 0,
  };

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

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const toggleRate = 1000;
  const confidenceScore = 0.3;

  useEffect(() => {
    const init = async () => {
      const detectorConfig = {
        modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
      };
      const detector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        detectorConfig
      );

      const interval = setInterval(() => {
        detect(detector);
      }, toggleRate);
      return () => clearInterval(interval);
    };
    init();
  }, []);

  const detect = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const poses = await detector.estimatePoses(video);

      drawCanvas(poses, canvasRef);
    }
  };

  const drawCanvas = (poses, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = webcamRef.current.video.videoWidth;
    canvas.current.height = webcamRef.current.video.videoHeight;

    const keypoint = poses[0].keypoints;

    jointCoordinate.rightShoulder = keypoint[6];
    jointCoordinate.rightElbow = keypoint[8];
    jointCoordinate.rightWrist = keypoint[10];
    jointCoordinate.rightHip = keypoint[12];
    jointCoordinate.rightKnee = keypoint[14];
    jointCoordinate.rightAnkle = keypoint[16];

    jointCoordinate.leftShoulder = keypoint[5];
    jointCoordinate.leftElbow = keypoint[7];
    jointCoordinate.leftWrist = keypoint[9];
    jointCoordinate.leftHip = keypoint[11];
    jointCoordinate.leftKnee = keypoint[13];
    jointCoordinate.leftAnkle = keypoint[15];

    const leftKeypointArray = [
      jointCoordinate.rightWrist,
      jointCoordinate.rightElbow,
      jointCoordinate.rightShoulder,
      jointCoordinate.rightHip,
      jointCoordinate.rightKnee,
      jointCoordinate.rightAnkle,
    ];
    const rightKeypointArray = [
      jointCoordinate.leftWrist,
      jointCoordinate.leftElbow,
      jointCoordinate.leftShoulder,
      jointCoordinate.leftHip,
      jointCoordinate.leftKnee,
      jointCoordinate.leftAnkle,
    ];

    if (poses) {
      ctx.beginPath();
      for (let i = 0; i < leftKeypointArray.length - 1; i++) {
        if (
          leftKeypointArray[i].score > confidenceScore &&
          leftKeypointArray[i + 1].score > confidenceScore
        ) {
          ctx.moveTo(leftKeypointArray[i].x, leftKeypointArray[i].y);
          ctx.lineTo(leftKeypointArray[i + 1].x, leftKeypointArray[i + 1].y);
        }
      }
      for (let i = 0; i < rightKeypointArray.length - 1; i++) {
        if (
          rightKeypointArray[i].score > confidenceScore &&
          rightKeypointArray[i + 1].score > confidenceScore
        ) {
          ctx.moveTo(rightKeypointArray[i].x, rightKeypointArray[i].y);
          ctx.lineTo(rightKeypointArray[i + 1].x, rightKeypointArray[i + 1].y);
        }
      }
      //! Shoulder to Shoulder
      if (
        jointCoordinate.leftShoulder.score > confidenceScore &&
        jointCoordinate.rightShoulder.score > confidenceScore
      ) {
        ctx.moveTo(
          jointCoordinate.leftShoulder.x,
          jointCoordinate.leftShoulder.y
        );
        ctx.lineTo(
          jointCoordinate.rightShoulder.x,
          jointCoordinate.rightShoulder.y
        );
      }

      //! Hip to Hip
      if (
        jointCoordinate.leftHip.score > confidenceScore &&
        jointCoordinate.rightHip.score > confidenceScore
      ) {
        ctx.moveTo(jointCoordinate.leftHip.x, jointCoordinate.leftHip.y);
        ctx.lineTo(jointCoordinate.rightHip.x, jointCoordinate.rightHip.y);
      }

      // draw line
      ctx.strokeStyle = "white";
      ctx.stroke();

      renderJointAngle(jointCoordinate, confidenceScore, reducerPackage);
    }
  };

  return (
    <div>
      <div>
        <Webcam ref={webcamRef} className={style.webCam} />
        <canvas ref={canvasRef} className={style.canvas} />
      </div>
    </div>
  );
};

export default Render;
