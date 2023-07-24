/*
    source: Github 
    repo: gitkonst/awesome-lightsaber
*/

import Tone from "tone";
import panner from "./panner";

const GAIN = 4; // 1 is nominal?
const TREBLE_MULTIPLIER = 1.27;

const synthProps = {
    modulationIndex: 2,
    harmonicity: 2,
    oscillator: {
        type: "sawtooth"
    },
    envelope: {
        attack: 0.25,
        release: 0.5,
    },
};

const distortion = new Tone.Distortion(0.1);
const reverb = new Tone.Freeverb(0.7, 300000); // Implemented
reverb.wet.value = 0.1;
const chorus = new Tone.Chorus(4, 2.5, 0.5); // Optional
const gain = new Tone.Gain(GAIN); // Implmented

const synth = new Tone.FMSynth(synthProps).chain(gain, panner, reverb, distortion, chorus, Tone.Master);
const synth2 = new Tone.FMSynth(synthProps).chain(gain, panner, Tone.Master);


class SaberBuzz {
    on(mouseMultiplier) {
        // Firefox 57.0.1 on Android: apparently can't handle two synths, can't handle effects
        synth.triggerAttack(TREBLE_MULTIPLIER * 50 * (1 + mouseMultiplier));
        synth2.triggerAttack(TREBLE_MULTIPLIER * 50.38 * (1 + mouseMultiplier));
    }
    off() {
        synth.triggerAttackRelease(TREBLE_MULTIPLIER * 50, .06);
        synth2.triggerAttackRelease(TREBLE_MULTIPLIER * 50.38, .06);
    }
}

const saberBuzz = new SaberBuzz();

export default saberBuzz;