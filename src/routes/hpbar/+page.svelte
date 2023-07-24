<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    let hp1 = 100;
    let hp2 = 100;

    function onKeyPress(event: KeyboardEvent) {
        event.preventDefault();
        switch (event.key) {
            case "a":
                hp1 -= 12;
                break;
            case "q":
                hp1 -= 50;
                break;
            case "d":
                hp2 -= 12;
                break;
            case "e":
                hp2 -= 50;
                break;
            case "r":
                hp1 = 100;
                hp2 = 100;
                break;
            default:
                break;
        }
        if (hp1 < 10) hp1 = 1;
        if (hp2 < 10) hp2 = 1;
    }

    onMount(() => {
        window.addEventListener("keydown", onKeyPress);
    });

    onDestroy(() => {
        window.removeEventListener("keydown", onKeyPress);
    });
</script>

<div class="bg">
    <div class="left">
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
    <div class="right">
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

    #popup {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s;
        animation: scale 0.3s alternate infinite linear;
    }

    #popup h1 {
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
