import { addMouseSound, addTouchSound, addAccelerometerSound } from "./soundFromInput";
import addMouseTilt from "./tilt/tiltMouse";
import StartAudioContext from "startaudiocontext";

import Tone from 'tone'
import addAccelerometerTilt from "./tilt/tiltAccelerometer";

function addInputEventListeners(element) {
    if (!element) {
        return;
    }
    // console.log(element)
    addMouseSound(element);
    // addMouseTilt(element);
    StartAudioContext(Tone.context, element);
}

export default addInputEventListeners;