class Controller{
    constructor(){
        console.log("hello from inside of Controller constructor");
        this.model = new Model();
        this.view = new View();
        this.view.display();

        this.prevGuesses = []
    }

    handleAddButton(){
        console.log("Controller handleAddButton")
        this.model.increaseScore();
        let score = this.model.getScore(); // this does nothing right now
        console.log(score)
        this.view.showScore(score);
        //this.view.display(); // should probably tell the view to display the score
    }

    handleChangeViewButton(){
        this.model.nextState();
        let gameState = this.model.getState();
        if(gameState == "???"){
            //this.view = new OtherView();
        }
        this.view.display();
    }

    handleGetGuess() {
        let guess
        let guessValid = false

        //loops the prompt until the guess is valid (at least 5 chars)
        while (!guessValid) {
            guess =  prompt("Input guess here:")
            if (!guess || !(guess.length == 5)) {
                continue
            }
            guessValid = true
        }

        this.model.userGuess(guess)
        this.prevGuesses.push(guess)
        this.view.showPreviousGuesses(this.prevGuesses)
    }
}