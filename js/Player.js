class Player extends MyObj{
    constructor() {
		super(0, "./images/player.png", 100, 100, playerDiv);

        this.score = 0.0;
        this.health = 10;
		this.timeGain = 0.1; //ogni millisecondo
    }

	timeIncrease() {	this.increaseScore(this.timeGain)	}

    increaseScore(x) {
        this.score = this.score + x;
    }
}
