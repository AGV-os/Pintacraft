console.log('Hello World!');

let px = "px"

let ponel = document.getElementById("ponelr")


let vel = -150

function spawnr() {
  const anim = setInterval(function() {
    if (vel <= 0) {
      vel += 1
      ponel.style.right = vel + px
    }
    
    if (vel == 0) {
      clearInterval(anim)
    }
  }, 1)
}

function unspawnr() {
  const anim = setInterval(function() {
    if (vel >= -150) {
      vel -= 1
      ponel.style.right = vel + px
    }
    if (vel == -150) {
      clearInterval(anim)
    }
  }, 1)
}
