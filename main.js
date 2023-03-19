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
        this.bullets = [];
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
        for(let i=this.bullets.length-1; i>=0; i--) {
            this.bullets[i].update();
            const pos = this.bullets[i].getPos();
            if( pos.x < 0 || pos.x > this.width ) {
                this.bullets.splice(i, 1);
            }
        }
    }
    draw(context) {
        this.player.draw(context);
        for(let i=this.enemies.length-1; i>=0; i--) {
            this.enemies[i].draw(context);
        }
        for(let i=this.bullets.length-1; i>=0; i--) {
            this.bullets[i].draw(context);
        }
        //console.log( this.bullets.length );
    }
    addBullet( x, y, vx, vy ) {
        this.bullets.push( new Bullet(x, y, vx, vy) );
    }
}

class Bullet {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
   update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    draw(context) {
        context.fillStyle = "grey";
        context.fillRect( this.x, this.y, 5, 5 );
    }
}