led.plotBrightness(2, 2, 75)
let a = 0
let b = 1
let c = 2
let d = 3
let e = 4
let list = [a, b, c, d, e]
let round = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    led.plotBrightness(2, 2, 75)
    led.plot(list[0], list[1])
    led.plot(list[0], list[2 + round])
    led.plot(list[1 + round], list[1])
    led.plot(list[1 + round], list[2 + round])
    led.plot(list[3 - round], list[2 - round])
    led.plot(list[3 - round], list[3])
    led.plot(list[4], list[2 - round])
    led.plot(list[4], list[3])
    round += 1
    if (round == 3) {
        round = 0
    }
    
})
