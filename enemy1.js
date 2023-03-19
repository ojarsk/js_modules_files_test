class Enemy1 {
    constructor(game) {
        this.game = game;
        this.x = game.width;
        this.y = Math.random()*(game.height-30);
        this.w = 30;
        this.h = 30;
        this.vx = -2;
        this.vy = 0;
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
    update() {
        this.x += this.vx;
    }
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.w, this.h );
    }
}