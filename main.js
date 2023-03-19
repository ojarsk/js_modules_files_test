function start() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    gmae = new Game();
}

class Game {
    constructor( canvas ) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
    }
    update() {

    }
    draw() {
        
    }
}