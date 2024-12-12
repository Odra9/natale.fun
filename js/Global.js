const scoreText = document.getElementById("SCORE").getElementsByTagName("p")[0];

const playerDiv = document.getElementById("PLAYER");
const enemiesDiv = document.getElementById("ENEMIES");
const foodsDiv = document.getElementById("FOODS");

const width = window.innerWidth;
const height = window.innerHeight;

function setScoreboard(x) {
	scoreText.innerHTML = parseInt(x);
}