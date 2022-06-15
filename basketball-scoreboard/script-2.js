let score = document.getElementById('score')
let scoreGuest = document.getElementById('score-guest')

let reset = document.getElementById('reset')

 function add1 (x) {
    let count = parseInt(x.textContent)
    count += 1
    x.textContent = count
}

 function add2 (y) {
    let count = parseInt(y.textContent)
    count += 2
    y.textContent = count
}

 function add3 (z) {
    let count = parseInt(z.textContent)
    count += 3
    z.textContent = count
}

function resetBtn () {
    let count = 0
    score.textContent = count;
    scoreGuest.textContent = count;
}

function leader (home, guest) {
    const homeLeader = parseInt(home.textContent)
    const guestLeader = parseInt(guest.textContent)

    if (homeLeader > guestLeader) {
        score.style.color = "#ffffff"
        scoreGuest.style.color = "#F94F6D"
    }
   else if (homeLeader < guestLeader) {
        scoreGuest.style.color = "#ffffff"
        score.style.color = "#F94F6D"
    }
    else if (homeLeader === 0 && guestLeader === 0) {
        scoreGuest.style.color = "#F94F6D"
        score.style.color = "#F94F6D"
    }
    else if ((homeLeader > 0) === (guestLeader > 0)) {
        scoreGuest.style.color = "green"
        score.style.color = "green"
     }
  



}