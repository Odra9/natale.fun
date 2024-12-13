class Food extends MyObj2 {
	constructor(objID, imgSrc, imgWidth, imgHeight) {
		super(objID, imgSrc, imgWidth, imgHeight, foodsDiv);
		this.points = 0;
    }

	getScore() {
		return this.points;
	}
}

class RegularFood extends Food {
	constructor(objID) {
		super(objID, "./images/regularFood.png", 50, 50);
		this.points = 500;
	}
}

class SuperFood extends Food {
	constructor(objID) {
		super(objID, "./images/superFood.png", 75, 75);
		this.points = 2500;
	}
}
