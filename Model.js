// this is data only. NO VISUALIZATION

class Model{
    constructor(){
        // todo
        this.score = 0;
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
        return list[Math.floor(Math.random() * list.length)];
    }
}