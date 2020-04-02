balota = document.getElementsByClassName('balota')
screen = document.getElementsByClassName('screen')
btnInit = document.getElementById('btn-play-init')
btnPlay = document.getElementById('btn-play')
balota[5].style.color = "white"

btnInit.onclick = () => game.start()
btnPlay.onclick = () => game.reset()

var game = {
    start: function () {
        screen[0].classList.add('hide')
        setTimeout(() => screen[1].classList.remove('hide'), 500)
        screen[1].classList.add('animated', 'bounceIn')
        this.rand()

    },
    rand: function () {
        for (i = 0; i <= 4; i++) {
            let r = Math.floor(Math.random() * (43 - 0)) + 0

            if (r < 10) {
                balota[i].innerHTML = "<p>0" + r + "</p>"
            } else {
                balota[i].innerHTML = "<p>" + r + "</p>"
            }
        }
        let r = Math.floor(Math.random() * (16 - 0)) + 0
        if (r < 10) {
            balota[5].innerHTML = "<p>0" + r + "</p>"
        } else {
            balota[5].innerHTML = "<p>" + r + "</p>"
        }
        this.animate()
    },
    reset: function () {
        var top = 0;
        for (let i = 0; i < 6; i++) {
            balota[i].classList.add('hide')
            // balota[i].classList.remove('animated', 'bounceInDown', 'delay-' + i + 's')
            balota[i].style.top = top + "px"
        }
        this.start();
    },
    animate: function () {
        let top = 400;
        for (let i = 0; i < 6; i++) {
            balota[i].classList.remove('hide')
            balota[i].classList.add('animated', 'bounceInDown', 'delay-' + i + 's')
            balota[i].style.top = top + "px"
        }
    }
}
