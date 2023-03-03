let mint = 1
let todosSegundos = mint * 60
let seg = todosSegundos
let continuar = false
const mostrado = setInterval(
  function () {
    if (seg <= 0) {
      timer(0, 0)
      return
    }
    const minutinhos = parseInt(seg / 60)
    const segundinhos = seg % 60

    timer(minutinhos, segundinhos)
    seg--;
    if (mint >= 1 && seg <= 60) {
      mint--
    }
  }, 1000)
function pausecount() {
  if (continuar) {
    document.querySelector('#start').innerHTML = "Pause"
    setInterval(
      function () {
        if (seg <= 0) {
          timer(0, 0)
          return
        }
        const minutinhos = parseInt(seg / 60)
        const segundinhos = seg % 60

        timer(minutinhos, segundinhos)
        seg--;
        if (mint >= 1 && seg <= 60) {
          mint--
        }
      }, 1000)
  }
  if (!continuar) {
    clearInterval(mostrado)
    continuar = true
    document.querySelector('#start').innerHTML = "Continue"
    return
  }
}
function timer(mint, seg) {
  let mostradoseg = seg < 10 ? '0' + String(seg) : seg
  let mostradomin = mint < 10 ? '0' + String(mint) : mint
  document.querySelector('.minutos').innerText = mostradomin;
  document.querySelector('.segundos').innerText = mostradoseg
}
function cancelcount() {
  clearInterval(mostrado)
  document.querySelector('.segundos').innerText = '00'
  document.querySelector('.minutos').innerText = '00'
}