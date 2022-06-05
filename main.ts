let distancia = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(distancia)
})
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 15) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
})
