class Player extends MyObj{
    constructor() {
		super(0, "./images/player.png", 200/2, 154/2);

        this.score = 0.0;
        this.health = 10;
    }

    increaseScore(x) {
        this.score = this.score + x;
    }

    setScoreboard() {
        scoreText.innerHTML =   "Punteggio: " + this.score + "</br>" +
                                "Salute: " + this.health;
    }
}
