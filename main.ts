music.setVolume(127)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playTone(784, music.beat(BeatFraction.Quarter))
    basic.pause(200)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    basic.pause(200)
    music.playTone(880, music.beat(BeatFraction.Quarter))
    basic.pause(200)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    basic.pause(200)
    music.playTone(659, music.beat(BeatFraction.Quarter))
})
