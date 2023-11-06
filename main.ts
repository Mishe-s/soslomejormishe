radio.onReceivedNumber(function (receivedNumber) {
    serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    Match = tool == receivedNumber
    player_index = players.indexOf(serialNumber)
    found = player_index >= 0
    if (Match && !(found)) {
        players.push(serialNumber)
    }
    if (Match && !(found)) {
        temp = players.removeAt(player_index)
    }
})
input.onGesture(Gesture.Shake, function () {
    players = [0]
    tool = randint(0, 2)
})
let temp = 0
let found = false
let player_index = 0
let tool = 0
let Match = false
let serialNumber = 0
let players: number[] = []
players = [1]
radio.setGroup(3)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.showNumber(players.length)
    }
})
