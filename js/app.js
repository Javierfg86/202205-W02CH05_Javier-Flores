let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
const board2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
let counter = 0;
const live = 1;
const dead = 0;
let arr1 = 0;
let arr2 = 0;
export function loop() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            arr1 = board.length;
            arr2 = board[i].length;
            if (board[i][j] === dead) {
                counter = calculator(board, i, j);
                if (counter === 3) {
                    board2[i][j] = live;
                }
            } else if (board[i][j] === live) {
                counter = calculator(board, i, j);
                if (counter > 3) {
                    board2[i][j] = dead;
                } else if (counter < 2) {
                    board2[i][j] = dead;
                } else if (counter === 3) {
                    board2[i][j] = live;
                } else {
                    board2[i][j] = board[i][j];
                }
            }
        }
    }

    board = board2;
    return board;
}

export function calculator(grid, x, y) {
    let counter = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const col = (x + i + arr1) % arr1;
            const row = (y + j + arr2) % arr2;
            counter += grid[col][row];
        }
    }
    counter -= grid[x][y];
    return counter;
}
loop();
