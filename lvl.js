const lvl = document.querySelector('.header__timer-extra')

function lvlUp() {
  let time = 50
  lvl.innerHTML++
  let prevLvl = lvl.innerHTML
  if (prevLvl > 98) time = 1000
  else if (prevLvl > 95) time = 500
  else if (prevLvl > 85) time = 250
  else if (prevLvl > 70) time = 150
  else if (prevLvl > 50) time = 100

  if (lvl.innerHTML >= 100) return

  setTimeout(lvlUp, time)
}

lvlUp();