import { accelerationNormalizedTilt } from "../accelerationNormalized";

const MAX_ANGLE_DEG = 45;

let _element = {};

function motionHandler(event) {
  if (touchActive()) { // Touch screen overrides accelerometer
    return;
  }
  const accel = -accelerationNormalizedTilt(event);
  const angleDeg = accel * MAX_ANGLE_DEG;
}

function addAccelerometerTilt(element) {
  _element = element;
  window.addEventListener("devicemotion", motionHandler);   // devicemotion only works on window
}

export default addAccelerometerTilt;