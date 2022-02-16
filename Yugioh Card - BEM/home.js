const RAYE = "raye"
const SHIZUKU = "shizuku"
const KAGARI = "kagari"

let rayeImg = document.querySelector(`.card--${RAYE} .card__img`)
let shizukuImg = document.querySelector(`.card--${SHIZUKU} .card__img`)
let kagariImg = document.querySelector(`.card--${KAGARI} .card__img`)

// console.log([rayeImg])
// console.log([shizukuImg])
// console.log([kagariImg])

rayeImg.src = `assets/img/${RAYE}.png`
shizukuImg.src = `assets/img/${SHIZUKU}.png`
kagariImg.src = `assets/img/${KAGARI}.png`
rayeImg.alt = `${RAYE} image`
shizukuImg.alt = `${SHIZUKU} image`
kagariImg.alt = `${KAGARI} image`