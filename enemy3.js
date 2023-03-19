class Enemy3 {
    constructor(game) {
        this.game = game;
        this.x = game.width+Math.random()*50;
        this.y = Math.random()*(game.height-40);
        this.w = 40;
        this.h = 40;
        this.vx = -0.5;
        this.vy = 0;
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
    update() {
        this.x += this.vx;
        if( this.x < this.game.width-40 && Math.random()<0.004 ) {
            this.game.addBullet( this.x-5, this.y+20, this.vx*3, 0 );
        }
    }
    draw(context) {
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.w, this.h );
    }
}