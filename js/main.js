const P = new Player();

onmousemove = function(event){P.setPos([event.clientX, event.clientY]);}

setScoreboard(0);

intervals = [];
//intervals.push(setInterval(() => P.timeIncrease(), 1));
//intervals.push(setInterval(() => setScoreboard(P.score), 100));
//intervals.push(setInterval(() => console.log(P.position)), 1000);



//intervals.push(setInterval(() => addFood(), 3000));

function __loop() {
	let toRemove = [];
	for (food of foods) {
		//eat
		if(P.position[0] == food.position[0] && P.position[1] == food.position[1]) {
			P.increaseScore(food.score);
			toRemove.push(food.ID);
		}

		//food oob
		if (food.position[0] < 0 || food.position[0] > width || food.position[1] < 0 || food.position[1] > height) {
			removeFood(food.ID);
			toRemove.push(food.ID);
		}
	}

	for (ID in toRemove) {
		removeFood(ID);	//MIGLIRa EFFICENZA
	}

	if(P.health == 0) {
		for (let i=0; i<intervals.length; i++) {
			clearInterval(intervals[i]);
		}

		console.log("GAME OVER");
	}
}


//intervals.push(setInterval(() => __loop(), 10));
