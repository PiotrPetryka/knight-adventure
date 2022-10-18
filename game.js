initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

let mapA = [['^','^','^','^','^','^','^','^','^','^'],
            ['-','-','|','^','^','^','^','^','^','^'],
            ['^','^','|','^','|','-','-','-','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','-','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['~','~','~','~','~','~','~','~','a','~'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','-','|','^','^','^','|','-'],
            ['^','^','^','^','^','^','^','^','^','^']]

let mapB = [['^','^','^','^','^','^','^','^','^','^'],
            ['^','^','^','^','^','^','^','^','^','^'],
            ['^','^','|','-','-','|','^','^','^','^'],
            ['^','^','|','^','^','|','^','^','^','^'],
            ['^','^','|','^','^','|','-','-','-','-'],
            ['^','^','|','-','-','|','^','^','^','^'],
            ['~','~','a','~','~','~','~','~','~','~'],
            ['^','^','|','^','^','|','^','^','^','^'],
            ['-','-','|','^','^','|','^','^','^','^'],
            ['^','^','^','^','^','|','^','^','^','^']]

let mapC = [['^','^','^','^','^','|','^','^','^','^'],
            ['^','^','^','^','^','|','^','^','^','^'],
            ['^','^','^','^','-','-','-','-','|','^'],
            ['^','^','^','^','|','^','^','^','|','^'],
            ['-','-','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','-','|','^','^','^','|','-'],
            ['^','^','^','^','^','^','^','^','^','^']]

let mapD = [['^','^','^','^','^','^','^','^','^','^'],
            ['^','~','~','~','~','~','~','^','^','^'],
            ['^','~','~','~','~','~','~','^','^','^'],
            ['^','^','^','^','^','^','^','^','^','^'],
            ['^','^','|','-','|','^','^','^','^','^'],
            ['^','^','|','^','|','^','^','^','^','^'],
            ['^','^','|','^','|','^','^','^','|','-'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['-','-','|','^','|','-','-','-','|','^'],
            ['^','^','^','^','^','^','^','^','^','^']]

let mapE = [['^','^','^','^','^','^','^','^','^','^'],
            ['^','^','|','-','-','-','|','-','|','^'],
            ['~','~','~','~','~','~','a','~','a','^'],
            ['^','^','|','^','^','^','|','^','|','^'],
            ['^','^','|','^','|','-','|','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['-','-','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','-','|','^','^','^','|','-'],
            ['^','^','^','^','^','^','^','^','^','^']]

let mapF = [['^','|','-','-','-','|','^','^','^','^'],
            ['^','|','^','^','^','|','^','^','^','^'],
            ['^','|','^','|','-','|','^','^','^','^'],
            ['^','|','^','|','^','^','^','^','^','^'],
            ['^','|','^','|','-','-','-','-','-','-'],
            ['^','|','^','^','^','^','^','^','^','^'],
            ['^','|','-','-','-','-','-','|','^','^'],
            ['^','^','^','^','^','^','^','|','^','^'],
            ['-','-','-','-','-','-','-','|','^','^'],
            ['^','^','^','^','^','^','^','^','^','^']]

let mapG = [['^','^','~','^','^','^','^','^','^','^'],
            ['^','^','~','^','^','^','^','|','-','-'],
            ['^','^','~','^','^','^','^','|','^','^'],
            ['^','^','~','^','^','|','-','|','^','^'],
            ['-','-','a','|','^','|','^','^','^','^'],
            ['^','^','~','|','^','|','^','^','^','^'],
            ['^','^','~','|','^','|','^','^','^','^'],
            ['^','^','~','|','^','|','^','^','^','^'],
            ['^','^','~','|','-','|','^','^','^','^'],
            ['^','^','~','^','^','^','^','^','^','^']]

let mapH = [['^','^','^','^','^','^','^','^','^','^'],
            ['-','-','|','^','|','-','-','-','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','^','^','|','^'],
            ['^','^','|','^','|','^','|','-','|','^'],
            ['^','^','|','^','|','^','|','^','^','^'],
            ['^','^','|','-','|','^','|','-','|','^'],
            ['^','^','^','^','^','^','^','^','|','^']]

let mapI = [['^','^','^','^','^','^','^','^','|','^'],
            ['^','^','^','^','^','^','^','^','|','^'],
            ['^','|','-','-','-','-','-','-','|','^'],
            ['^','|','^','^','^','^','^','^','^','^'],
            ['^','|','^','^','^','^','^','^','^','^'],
            ['~','a','~','~','~','~','~','~','~','~'],
            ['^','|','^','^','^','^','^','^','^','^'],
            ['^','|','^','|','-','-','-','|','^','^'],
            ['^','|','-','|','^','^','^','|','^','^'],
            ['^','^','^','^','^','^','^','|','^','^']]

let mapJ = [['^','^','^','^','^','^','^','|','^','^'],
            ['^','|','-','-','|','^','^','|','^','^'],
            ['^','|','^','^','|','-','-','|','^','^'],
            ['~','a','~','~','a','~','~','~','~','~'],
            ['^','|','^','^','|','^','^','|','^','^'],
            ['^','|','^','^','|','^','^','|','^','^'],
            ['^','|','^','^','|','-','-','|','^','^'],
            ['^','|','^','^','^','^','^','^','^','^'],
            ['^','|','-','-','-','-','-','|','^','^'],
            ['^','^','^','^','^','^','^','|','^','^']]