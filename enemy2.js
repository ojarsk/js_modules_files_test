class Enemy2 {
    constructor(game) {
        this.game = game;
        this.x = game.width+Math.random()*250;
        this.y = Math.random()*(game.height-30);
        this.w = 10;
        this.h = 10;
        this.vx = -3;
        this.vy = 0;
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
    update() {
        this.x += this.vx;
    }
    draw(context) {
        context.fillStyle = "pink";
        context.fillRect(this.x, this.y, this.w, this.h );
    }
}