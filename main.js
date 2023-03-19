import {Player} from './player.js'

window.addEventListener('load', start );

function start() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    let game = new Game(canvas);

    function animate() {
        console.log(ctx);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
    
}


class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this, 10, 10, 20, 20);
    }
    update() {

    }
    draw(context) {
        this.player.draw(context);
    }
}

