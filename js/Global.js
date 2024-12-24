const scoreText = document.getElementById("SCORE").getElementsByTagName("p")[0];

const spritesDiv = document.getElementById("sprites");

const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height; 