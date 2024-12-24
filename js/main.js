const P = new Player();
const movePlayer = function (event) {
	let newPos = [0, 0];
	if (e.type == "mousemove") {
		newPos = [event.clientX, event.clientY];
	} else {
		newPos = [event.touches[0].clientX, event.touches[0].clientY];
	}
	P.setPos([event.clientX, event.clientY]);
}
document.addEventListener('mousemove', movePlayer);
document.addEventListener('touchmove', movePlayer);

objs = [];
let spawnID = 1, spawn = true;
let spawnTimeInterval = setInterval(() => { spawnID++; spawn = true}, 2000);
border = 250;
function GAMELOOP(deltaTime) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	P.increaseScore(deltaTime); //1 pt/ms

	//update objs
	for (obj of objs) {
		//move objs
		obj.move(deltaTime);

		//check dead
		//check collision
		if (checkCollision(P, obj)) {
			if(obj.constructor.name == "Enemy") {
				P.health -= 1;
			} else {
				P.increaseScore(obj.getPoints());
			}
			obj.isAlive = false;
		} else {
			//check oob
			if (obj.position[0] < -border || obj.position[0] > width+border || obj.position[1] < -border || obj.position[1] > height+border) {
				obj.isAlive = false;
			}
		}
	}

	//delete objs
	objs = objs.filter((obj) => obj.isAlive);

	//spawn objs
	let E = 0;
	let F = 0;
	if(spawn) {
		E = Math.floor(Math.exp(0.5*Math.sqrt(spawnID)));
		F = Math.floor(Math.exp(0.55*Math.sqrt(spawnID)));

		spawn = false;
	}
	for(let i=0; i<E; i++) {
		let e = new Enemy(spawnID);
		objs.push(e);
	}
	for(let i=0; i<F; i++) {
		let f = (Math.random() < 0.95) ? new RegularFood(spawnID) : new SuperFood(spawnID);
		objs.push(f);
	}
	P.setScoreboard();

	//DRAW
	for (obj of objs) {
		ctx.drawImage(obj.sprite, obj.getImgPosX(), obj.getImgPosY(), obj.imgWidth, obj.imgHeight);
	}
	ctx.drawImage(P.sprite, P.getImgPosX(), P.getImgPosY(), P.imgWidth, P.imgHeight);

	return P.health>0;
}


let time;
function update() {
	let deltaTime;
	if(time == undefined) {
		time = new Date().getTime();
		deltaTime = 0;
	} else {
		let currTime = new Date().getTime();
		deltaTime = currTime - time;
		time = currTime;
	}
	
	if (GAMELOOP(deltaTime)) {
		time = new Date().getTime();
		window.requestAnimationFrame(update);
	} else {
		alert("Hai perso :(\nIl tuo highscore è " + P.score + "\nRicarica la pagina per ricominciare");
	}
}
window.requestAnimationFrame(update);