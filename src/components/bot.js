import random from "random"

export function bot(board, value, setBoard) {
    const indexArray = []
    board.forEach((el, index) => {
        if (el == null) indexArray.push(index)
    })
    let someNumber = random.int(0, indexArray.length - 1)
    board[indexArray[someNumber]] = value
    return board
}


