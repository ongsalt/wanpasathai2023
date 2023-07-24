const hpbar1 = document.querySelector('#hp1')
const hpbar2 = document.querySelector('#hp2')
const namku = document.querySelector('.right')
// const gameover = document.querySelector('#popup')

let hp1 = 100
let hp2 = 100


function update(hp1i, hp2i) {
    if (hp2i === 0) {
        setTimeout(() => {
            namku.classList.add('grayscale')
            gameover.classList.remove("hide")
        }, 200)
    }
    hpbar1.style.width = `${hp1i}%`
    hpbar2.style.width = `${hp2i}%`
}

window.addEventListener('keydown', event => {
    // event.preventDefault()   
    switch (event.key) {
        case 'a':
            hp1 -= 12
            break
        case 'q':
            hp1 -= 50
            break
        case 'd':
            hp2 -= 12
            break
        case 'e':
            hp2 -= 50
            break
        case 'r':
            hp1 = 100
            hp2 = 100
            break
        default:
            break
    }
    if (hp1 < 10) hp1 = 1
    if (hp2 < 10) hp2 = 1
    update(hp1, hp2)
})