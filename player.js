export class Player {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    update() {

    }
    draw(context) {
        context.fillStyle = "black";
        context.fillRect( this.x, this.y, this.w, this.h );
    }
}