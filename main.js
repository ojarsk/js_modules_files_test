import {Player} from './player.js'

window.addEventListener('load', start );

function start() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    let game = new Game(canvas);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
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
        //this.enemies.push( new Enemy1(this) );
        for( let i=0; i<3; i++ )
            this.enemies.push( this.newEnemy() );
    }
    newEnemy() {
        const n = Math.floor(Math.random()*3)+1;
        switch( n ) {
            case 1: return new Enemy1(this);
            case 2: return new Enemy2(this);
            case 3: return new Enemy3(this);
        }
    }
    update() {
        this.player.update();
        for(let i=this.enemies.length-1; i>=0; i--) {
            this.enemies[i].update();
            const pos = this.enemies[i].getPos();
            if( pos.x < 0 ) {
                this.enemies.splice(i, 1);
                this.enemies.push(  this.newEnemy()  );
            }
        }
    }
    draw(context) {
        this.player.draw(context);
        for(let i=this.enemies.length-1; i>=0; i--) {
            this.enemies[i].draw(context);
        }
    }
}
