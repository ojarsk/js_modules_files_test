import {Player} from './player.js'

window.addEventListener('load', start );

function start() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    let game = new Game(canvas);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(ctx);
        game.draw(ctx);
    }
    setInterval( animate, 16 );
    
}


class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this, 10, 10, 20, 20);
        this.enemies = [];
        this.enemies.push( new Enemy1(this) );
    }
    update() {

    }
    draw(context) {
        this.player.draw(context);
        for(let i=this.enemies.length-1; i>=0; i--) {
            this.enemies[i].update();
            this.enemies[i].draw(context);
        }
    }
}

