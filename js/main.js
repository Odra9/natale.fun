const P = new Player();

onmousemove = function(event){P.setPos([event.clientX, event.clientY]);}

setScoreboard(0);

intervals = [];
intervals.push(setInterval(() => P.timeIncrease(), 1));
intervals.push(setInterval(() => setScoreboard(P.score), 100));
//intervals.push(setInterval(() => console.log(P.position)), 1000);

//----------------
let objs = [];
let objID = 0;

intervals.push(setInterval(() => addObj("RegularFood"), 1000));
intervals.push(setInterval(() => addObj("SuperFood"), 10000));
intervals.push(setInterval(() => addObj("Enemy"), 3000));

function addObj(type) {
	let newObj;
	switch(type) {
		case "RegularFood":
			newObj = new RegularFood(objID);
			break;
		case "SuperFood":
			newObj = new SuperFood(objID);
			break;
		case "Enemy":
			newObj = new Enemy(objID);
			break;
	}
	newObj.setPos([parseInt(Math.random()*width), parseInt(Math.random()*height)]);
	objs.push(newObj);

	objID++;
}

function removeObjs(arr) {
	objs = objs.filter(function(obj) {
		let toRemove = false;
		for (arg in arr) {
			if (obj.ID == arg) {
				toRemove = true;
			}

			if (toRemove == true) {
				obj.sprite.remove();
				break;
			}
		}

		return !toRemove;
	})
}

//------------------

let border = 250;
function __loop() {
	//FOOD
	let toRemove = [];
	for (let obj of objs) {
		//obj oob
		if (obj.position[0] < -border || obj.position[0] > width+border || obj.position[1] < -border || obj.position[1] > height+border) {
			toRemove.push(obj.ID);
		} else {
			obj.move();
		}
	}
	removeObjs(toRemove);

	if(P.health == 0) {
		for (let i=0; i<intervals.length; i++) {
			clearInterval(intervals[i]);
		}

		console.log("GAME OVER");
	}
}


intervals.push(setInterval(() => __loop(), 10));
