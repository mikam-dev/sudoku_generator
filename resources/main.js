//starting conditions.
const startGame = () => {
    //Shuffle function
    const shuffle = array => {

        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };
    //Generates random ID for generating starting conditions.
    const randomId = () => {
        let w = letter1 => {
            letter1 = (Math.ceil(Math.random() * 3));
            switch (letter1) {
            case 1:
                w = 'A';
                break;
            case 2:
                w = 'B';
                break;
            case 3:
                w = 'C';
                break;
            } return w;
        }
        
        let x = (Math.ceil(Math.random() * 3));
        
        let y = letter2 => {
            letter2 = (Math.ceil(Math.random() * 3));
            switch (letter2) {
            case 1:
                y = 'a';
                break;
            case 2:
                y = 'b';
                break;
            case 3:
                y = 'c';
                break;
            } return y;
        };
        
        let z = (Math.ceil(Math.random() * 3));
        
        let id = w()+x+y()+z;
        return id;
    }


    //Sudoku rows, columns, boxes.

    //rows
    const rowAa = ['A1a1','A1a2','A1a3','A2a1','A2a2','A2a3','A3a1','A3a2','A3a3'];
    const rowAb = ['A1b1','A1b2','A1b3','A2b1','A2b2','A2b3','A3b1','A3b2','A3b3'];
    const rowAc = ['A1c1','A1c2','A1c3','A2c1','A2c2','A2c3','A3c1','A3c2','A3c3'];
    const rowBa = ['B1a1','B1a2','B1a3','B2a1','B2a2','B2a3','B3a1','B3a2','B3a3'];
    const rowBb = ['B1b1','B1b2','B1b3','B2b1','B2b2','B2b3','B3b1','B3b2','B3b3'];
    const rowBc = ['B1c1','B1c2','B1c3','B2c1','B2c2','B2c3','B3c1','B3c2','B3c3'];
    const rowCa = ['C1a1','C1a2','C1a3','C2a1','C2a2','C2a3','C3a1','C3a2','C3a3'];
    const rowCb = ['C1b1','C1b2','C1b3','C2b1','C2b2','C2b3','C3b1','C3b2','C3b3'];
    const rowCc = ['C1c1','C1c2','C1c3','C2c1','C2c2','C2c3','C3c1','C3c2','C3c3'];
    //columns
    const col11 = ['A1a1','A1b1','A1c1','B1a1','B1b1','B1c1','C1a1','C1b1','C1c1'];
    const col12 = ['A1a2','A1b2','A1c2','B1a2','B1b2','B1c2','C1a2','C1b2','C1c2'];
    const col13 = ['A1a3','A1b3','A1c3','B1a3','B1b3','B1c3','C1a3','C1b3','C1c3'];
    const col21 = ['A2a1','A2b1','A2c1','B2a1','B2b1','B2c1','C2a1','C2b1','C2c1'];
    const col22 = ['A2a2','A2b2','A2c2','B2a2','B2b2','B2c2','C2a2','C2b2','C2c2'];
    const col23 = ['A2a3','A2b3','A2c3','B2a3','B2b3','B2c3','C2a3','C2b3','C2c3'];
    const col31 = ['A3a1','A3b1','A3c1','B3a1','B3b1','B3c1','C3a1','C3b1','C3c1'];
    const col32 = ['A3a2','A3b2','A3c2','B3a2','B3b2','B3c2','C3a2','C3b2','C3c2'];
    const col33 = ['A3a3','A3b3','A3c3','B3a3','B3b3','B3c3','C3a3','C3b3','C3c3'];
    //boxes
    const boxA1 = ['A1a1','A1a2','A1a3','A1b1','A1b2','A1b3','A1c1','A1c2','A1c3'];
    const boxA2 = ['A2a1','A2a2','A2a3','A2b1','A2b2','A2b3','A2c1','A2c2','A2c3'];
    const boxA3 = ['A3a1','A3a2','A3a3','A3b1','A3b2','A3b3','A3c1','A3c2','A3c3'];
    const boxB1 = ['B1a1','B1a2','B1a3','B1b1','B1b2','B1b3','B1c1','B1c2','B1c3'];
    const boxB2 = ['B2a1','B2a2','B2a3','B2b1','B2b2','B2b3','B2c1','B2c2','B2c3'];
    const boxB3 = ['B3a1','B3a2','B3a3','B3b1','B3b2','B3b3','B3c1','B3c2','B3c3'];
    const boxC1 = ['C1a1','C1a2','C1a3','C1b1','C1b2','C1b3','C1c1','C1c2','C1c3'];
    const boxC2 = ['C2a1','C2a2','C2a3','C2b1','C2b2','C2b3','C2c1','C2c2','C2c3'];
    const boxC3 = ['C3a1','C3a2','C3a3','C3b1','C3b2','C3b3','C3c1','C3c2','C3c3'];

    //grouped arrays
    const rows = [rowAa,rowAb,rowAc,rowBa,rowBb,rowBc,rowCa,rowCb,rowCc];
    const columns = [col11,col12,col13,col21,col22,col23,col31,col32,col33];
    const boxes = [boxA1,boxA2,boxA3,boxB1,boxB2,boxB3,boxC1,boxC2,boxC3];

    //all arrays
    const gameBox = [rows,columns,boxes];

    //array of 1 through 9.
    const oneToNine = [1,2,3,4,5,6,7,8,9];

    //Number generation.
    for (let k = 0; k < 3; k++){
        
        for (let j = 0; j < 9; j++){ 
            shuffle(oneToNine);
            for (let i = 0; i < 9; i++){
                let cell = oneToNine[i];    
                document.getElementById(gameBox[k][j][i]).value = cell;  
            };    
        };
    
    }
/*
    for (let m = 0; m < 81; m++){
        let hideOrShow = Math.ceil(Math.random() * 3);
        if (hideOrShow === 1 || 2) {
            document.getElementById(randomId()).value = null;
        }
    }
*/
}

//on page load
startGame();


//reset game
const resetGame = () => {
    let confirmReset = confirm('Are you sure you want to restart?');
    if (confirmReset === true){
        startGame();
    } else {
        return alert("Keep trying! You can do this!");
    }
}


document.getElementById('reset').addEventListener('click',resetGame);


