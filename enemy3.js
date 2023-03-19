class Enemy3 {
    constructor(game) {
        this.game = game;
        this.x = game.width+Math.random()*250;
        this.y = Math.random()*(game.height-40);
        this.w = 40;
        this.h = 40;
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
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.w, this.h );
    }
}