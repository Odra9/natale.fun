class Enemy extends MyObj2 {
	constructor(objID) {
		super(objID, null, 0, 0, enemiesDiv);
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