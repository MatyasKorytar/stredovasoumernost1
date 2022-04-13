led.plot_brightness(2, 2, 75)
a = 0
b = 1
c = 2
d = 3
e = 4
list = [a, b, c, d, e]
round = 0
def on_button_pressed_a():
    global round
    basic.clear_screen()
    led.plot_brightness(2, 2, 75)
    led.plot(list[0], list[1])
    led.plot(list[0], list[2+round])
    led.plot(list[1+round], list[1])
    led.plot(list[1+round], list[2+round])
    led.plot(list[3-round], list[2-round])
    led.plot(list[3-round], list[3])
    led.plot(list[4], list[2-round])
    led.plot(list[4], list[3])
    round += 1
    if round == 3:
        round = 0
input.on_button_pressed(Button.A, on_button_pressed_a)