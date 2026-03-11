// this is visuals only. NO GAME DATA HERE (only heights, widths, offsets, colors, etc)

class View{
    constructor(){
        // todo
        console.log("hello from inside of View constructor");
    }

    display(){
        // todo
        console.log("hello from inside of View display");

        // notice I'm using `` here so that I can make a multiline String
        document.getElementById("stage").innerHTML = `
            <h1>View One</h1>
            <p id="scoreDisplay">check the console</p>
            <button onclick="app.handleAddButton()">add</button>
            <p id="guessDisplay">Previous guesses</p>
            <button onclick="app.handleGetGuess()">guess</button>
        `;
    }

    showScore(score){
        document.getElementById("scoreDisplay").innerHTML = score;
    }

    showPreviousGuesses(listOfGuesses){
        document.getElementById("guessDisplay").innerHTML = listOfGuesses;
    }
}