class Player extends MyObj{
    constructor() {
		super(0, "./images/player.png", 100, 100);

        this.score = 0.0;
        this.health = 10;
    }

    increaseScore(x) {
        this.score = this.score + x;
    }

    setScoreboard() {
        scoreText.innerHTML =   "Score: " + this.score + "</br>" +
                                "Health: " + this.health;
    }
}
