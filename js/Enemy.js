class Enemy extends MyObj2 {
	constructor(objID) {
		super(objID, "./images/enemy.png", 60, (157 * 6/22), enemiesDiv);
	}
}

enemies = [];
enemyID = 0;
function addEnemy() {
	let newEnemy = new Enemy(enemyID);
	enemies.push(newEnemy);

	enemyID++;
}

function removeEnemies(...args) {
	enemies = enemies.filter(function(enemy) {
		let toRemove = false;
		for (arg in args) {
			if (enemy.ID == arg) {
				toRemove = true;
			}

			if (toRemove == true) {
				enemy.sprite.remove();
				break;
			}
		}
		
		return !toRemove;
	})
}