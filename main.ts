input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(9)
    while (true) {
        let the_number_before = 0
        basic.showNumber(the_number_before - 1)
    }
})
