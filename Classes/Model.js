// this is data only. NO VISUALIZATION

class Model{
    constructor(){
        // todo
        this.score = 0;
        this.word  = ""
        this.prevGuesses = []
        console.log("hello from inside of Model constructor");
    }

    increaseScore(){
        // todo
        console.log("hello from inside of Model increaseScore")
        this.score++;
    }

    getScore(){
        // todo
        return this.score;
    }

    getState(){
        // todo
    }

    nextState(){
        // todo
    }

    getRandomWord(list){
        let randWord = list[Math.floor(Math.random() * list.length)]
        this.word = randWord
        return randWord;
    }

    //might need to be added onto later
    userGuess(guess) {
        this.prevGuesses.push(guess)
        return (guess == this.word)
    }
}