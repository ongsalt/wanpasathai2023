function offsetCenterX(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  const realOffsetX = (event.clientX - boundingRect.left);
  return realOffsetX - event.currentTarget.offsetWidth / 2;
}

function offsetBottomY(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  let offsetBottomY = boundingRect.bottom - event.clientY;
  if(offsetBottomY <= 0) offsetBottomY = 0.01;
  return offsetBottomY;
}

function idle(event) {
}

function mouseTiltHandler(event) {

  const offsetX = offsetCenterX(event);
  let tan = 99999;
  if(offsetX !== 0) {
    tan = offsetBottomY(event) / offsetX;
  }
  let angleRad =  Math.PI / 2 - Math.atan(tan);
  if(tan < 0) angleRad -= Math.PI;
}

function addMouseTilt(element) {
  element.addEventListener("mousemove", mouseTiltHandler);
  element.addEventListener("mouseleave", idle);
}

export default addMouseTilt;