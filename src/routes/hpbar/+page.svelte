<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { browser } from "$app/environment";

  import punch1 from "$lib/assets/punch1.mp3";
  import punch2 from "$lib/assets/punch2.mp3";
  import punch3 from "$lib/assets/punch3.mp3";
  import punch4 from "$lib/assets/punch4.mp3";
  import punch5 from "$lib/assets/punch5.mp3";
  import buryTheLight from "$lib/assets/bury_the_light.mp3";

  const punchEffectsFilename = [punch1, punch2, punch3, punch4, punch5];
  const punchEffects: HTMLAudioElement[] = [];

  let hp1 = 100;
  let hp2 = 100;
  let popup = false;
  let isBGMPlayed = false;
  let bgm: HTMLAudioElement;

  function playHitSound() {
    const targetIndex = Math.round(Math.random() * (punchEffects.length - 1));
    console.log(targetIndex);
    const audio = punchEffects[targetIndex];
    audio.play();
  }

  function playBGM() {
    if (isBGMPlayed) return;
    isBGMPlayed = true;
    bgm = new Audio(buryTheLight);
    bgm.volume = 0.4;
    bgm.play();
  }

  function onKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case "a":
        hp1 -= 5;
        playHitSound();
        event.preventDefault();

        break;
      case "q":
        hp1 -= 15;
        playHitSound();
        event.preventDefault();

        break;
      case "d":
        hp2 -= 5;
        playHitSound();
        event.preventDefault();

        break;
      case "e":
        hp2 -= 15;
        playHitSound();
        event.preventDefault();

        break;
      case "r":
        hp1 = 100;
        hp2 = 100;
        popup = false;
        event.preventDefault();
        break;
      default:
        break;
    }
    if (hp1 < 10 || hp2 < 10) {
      hp1 = 1;
      hp2 = 1;
      popup = true;
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener("keydown", onKeyPress);
      punchEffects.push(...punchEffectsFilename.map((it) => new Audio(it)));
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("keydown", onKeyPress);
      bgm?.pause();
    }
  });
</script>

<div class="bg" on:click={playBGM}>
  <div class="left {popup ? 'grayscale' : ''}">
    <div class="rhombus">
      <img src="/image/wave.png" alt="" />
    </div>
    <div>
      <div class="hpbar">
        <div style="width: {hp1}%;" />
      </div>
      <h3 class="name">King of พยานาค</h3>
    </div>
  </div>
  <h1 class="vs">VS</h1>
  <div class="right {popup ? 'grayscale' : ''}">
    <div class="rhombus">
      <img src="/image/tee.png" alt="" />
    </div>
    <div>
      <div class="hpbar">
        <div style="width: {hp2}%;" />
      </div>
      <h3 class="name">ท้าวผาแดง</h3>
    </div>
  </div>
  {#if popup}
    <div class="popup">
      <h1 class="pm-0">GAME OVER</h1>
      <p class="">No one win</p>
    </div>
  {/if}
</div>

<style>
  .bg {
    background-color: #00ff00;
    /* background-image: url("/image/original.png"); */
    /* background-size: cover; */
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .left,
  .right {
    top: 3vh;
    left: -18px;
    display: flex;
    position: fixed;
    align-items: flex-end;
    transition: all 0.2s;
  }

  .rhombus {
    /* margin-left: -1vw; */
    height: 12vh;
    width: 11vw;
    transform: skew(-20deg);
    overflow: hidden;
    background-color: black;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    border-top: 1.5px solid white;
    border-bottom: 1.5px solid white;
    box-shadow: -4px 0px 4px red;
  }

  .rhombus img {
    height: 12vh;
    transform: skew(20deg);
    width: 11vw;
    object-fit: cover;
    /* background-color: #005000; */
  }

  .hpbar {
    margin-bottom: 1vh;
    margin-left: 0vw;
    height: 3vh;
    width: 35.3vw;
    transform: skew(36deg);
    background-color: #eac6c4;
    border: 2px solid white;
    box-shadow: 0px 0px 8px black;
    display: flex;
  }

  .name {
    padding: 0;
    margin: 0;
    /* width: fit-content; */
    margin-bottom: 1vh;
    margin-left: 2vh;
    margin-right: 2vh;
  }

  .right {
    left: unset;
    right: -18px;
    flex-direction: row-reverse;
    text-align: end;
    /* margin-right: -20px; */
  }

  .right .hpbar {
    background-color: #cad0e8;
    flex-direction: row-reverse;
    transform: skew(-36deg);
  }

  .right .rhombus {
    transform: skew(20deg);
    box-shadow: 4px 0px 4px blue;
    background-color: black;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .right img {
    transform: skew(-20deg);
  }

  .hpbar div {
    background: rgb(255, 130, 130);
    background: linear-gradient(
      270deg,
      rgb(255, 108, 108) 0%,
      rgba(245, 37, 37, 1) 100%
    );
    width: 100%;
    height: 100%;
    transition: width 0.2s;
  }

  .right .hpbar div {
    background: rgb(104, 110, 255);
    background: linear-gradient(
      90deg,
      rgba(104, 110, 255, 1) 0%,
      rgba(37, 93, 245, 1) 100%
    );
  }

  .vs {
    left: 0;
    right: 0;
    position: fixed;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .popup {
    position: fixed;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.4s;
    animation: scale 0.3s alternate infinite linear;
  }

  .popup h1 {
    font-size: 5rem;
  }

  @keyframes scale {
    0% {
      scale: 1;
    }
    100% {
      scale: 1.1;
    }
  }

  .grayscale {
    filter: grayscale() brightness(0.8);
  }

  .hide {
    opacity: 0;
    /* scale: .9; */
  }
</style>
