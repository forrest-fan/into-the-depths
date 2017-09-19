
/*
  TODO LIST
    - enemy animations
*/
function setup() {
	//Create fullscreen canvas
	createCanvas(1024, 576);

	//black background
	background(0);
}

//set width and height to correspond with canvas size
var width = 1024,
	height = 576;

//IMAGES

//image variables
var up1, up2, up3, down1, down2, down3, left1, left2, left3, right1, right2, right3, aimUp, aimDown, aimRight, aimLeft, reg, flame1, flame2, flame3, menuBack,
	tempBack, startPrompt, dScreen, instru, shop, hud, coin, pMenu, atkDamageUpgrade, atkRangeUpgrade, hpUpgrade, speedUpgrade, lifeStealUpgrade, atkSpeedUpgrade,
	upBlock, upBlockEmpty, smallGhoulf1, smallGhoulf2, smallGhoulf3, medGhoulf1, medGhoulf2, medGhoulf3, bigGhoulf1, bigGhoulf2, bigGhoulf3, bigGhoulb1, bigGhoulb2, bigGhoulb3;

function preload() {
	//Menu
	reg = loadFont("libraries/assets/Pixeled.ttf");
	flame1 = loadImage("libraries/img/menus/flame1.png");
	flame2 = loadImage("libraries/img/menus/flame2.png");
	flame3 = loadImage("libraries/img/menus/flame3.png");
	menuBack = loadImage("libraries/img/menus/GameMenu.png");
	tempBack = loadImage("libraries/img/menus/tempBack.png");
	startPrompt = loadImage("libraries/img/menus/pressToStart.png");
	dScreen = loadImage("libraries/img/menus/deathScreen.png");
	instru = loadImage("libraries/img/menus/instructions.png");
	shop = loadImage("libraries/img/menus/shop.png");
	hud = loadImage("libraries/img/menus/gameHUD.png");
	coin = loadImage("libraries/img/menus/coin.png");
	upBlock = loadImage("libraries/img/menus/upBlock.png");
	upBlockEmpty = loadImage("libraries/img/menus/upBlockEmpty.png")
	pMenu = loadImage("libraries/img/menus/pauseMenu.png");

	//Player facing up
	up1 = loadImage("libraries/img/player/characterBack1.png");
	up2 = loadImage("libraries/img/player/characterBack2.png");
	up3 = loadImage("libraries/img/player/characterBack3.png");

	//Player facing down
	down1 = loadImage("libraries/img/player/characterFront1.png");
	down2 = loadImage("libraries/img/player/characterFront2.png");
	down3 = loadImage("libraries/img/player/characterFront3.png");

	//Player facing left
	left1 = loadImage("libraries/img/player/characterLSide1.png");
	left2 = loadImage("libraries/img/player/characterLSide2.png");
	left3 = loadImage("libraries/img/player/characterLSide3.png");

	//Player facing right
	right1 = loadImage("libraries/img/player/characterRSide1.png");
	right2 = loadImage("libraries/img/player/characterRSide2.png");
	right3 = loadImage("libraries/img/player/characterRSide3.png");

	//Attack aiming
	aimUp = loadImage("libraries/img/player/attackArrowU.png");
	aimDown = loadImage("libraries/img/player/attackArrowD.png");
	aimRight = loadImage("libraries/img/player/attackArrowR.png");
	aimLeft = loadImage("libraries/img/player/attackArrowL.png");

	//Attack Animation
	atkUp1 = loadImage("libraries/img/attacks/attack1U.png");
	atkUp2 = loadImage("libraries/img/attacks/attack2U.png");
	atkUp3 = loadImage("libraries/img/attacks/attack3U.png");
	atkDown1 = loadImage("libraries/img/attacks/attack1D.png");
	atkDown2 = loadImage("libraries/img/attacks/attack2D.png");
	atkDown3 = loadImage("libraries/img/attacks/attack3D.png");
	atkLeft1 = loadImage("libraries/img/attacks/attack1L.png");
	atkLeft2 = loadImage("libraries/img/attacks/attack2L.png");
	atkLeft3 = loadImage("libraries/img/attacks/attack3L.png");
	atkRight1 = loadImage("libraries/img/attacks/attack1R.png");
	atkRight2 = loadImage("libraries/img/attacks/attack2R.png");
	atkRight3 = loadImage("libraries/img/attacks/attack3R.png");

	//Small Ghoul
	smallGhoulf1 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulFront1.png");
	smallGhoulf2 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulFront2.png");
	smallGhoulf3 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulFront3.png");
	smallGhoull1 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulLSide1.png");
	smallGhoull2 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulLSide2.png");
	smallGhoull3 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulLSide3.png");
	smallGhoulr1 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulRSide1.png");
	smallGhoulr2 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulRSide2.png");
	smallGhoulr3 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulRSide3.png");
	smallGhoulb1 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulBack1.png");
	smallGhoulb2 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulBack2.png");
	smallGhoulb3 = loadImage("libraries/img/enemies/smallGhoul/smallGhoulBack3.png");
	//Medium Ghoul
	medGhoulf1 = loadImage("libraries/img/enemies/medGhoul/medGhoulFront1.png");
	medGhoulf2 = loadImage("libraries/img/enemies/medGhoul/medGhoulFront2.png");
	medGhoulf3 = loadImage("libraries/img/enemies/medGhoul/medGhoulFront3.png");
	medGhoull1 = loadImage("libraries/img/enemies/medGhoul/medGhoulLSide1.png");
	medGhoull2 = loadImage("libraries/img/enemies/medGhoul/medGhoulLSide2.png");
	medGhoull3 = loadImage("libraries/img/enemies/medGhoul/medGhoulLSide3.png");
	medGhoulr1 = loadImage("libraries/img/enemies/medGhoul/medGhoulRSide1.png");
	medGhoulr2 = loadImage("libraries/img/enemies/medGhoul/medGhoulRSide2.png");
	medGhoulr3 = loadImage("libraries/img/enemies/medGhoul/medGhoulRSide3.png");
	medGhoulb1 = loadImage("libraries/img/enemies/medGhoul/medGhoulBack1.png");
	medGhoulb2 = loadImage("libraries/img/enemies/medGhoul/medGhoulBack2.png");
	medGhoulb3 = loadImage("libraries/img/enemies/medGhoul/medGhoulBack3.png");
	//Large Ghoul
	bigGhoulf1 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulFront1.png");
	bigGhoulf2 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulFront2.png");
	bigGhoulf3 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulFront3.png");
	bigGhoulb1 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulBack1.png");
	bigGhoulb2 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulBack2.png");
	bigGhoulb3 = loadImage("libraries/img/enemies/bigGhoul/bigGhoulBack3.png");

	//Upgrade Icons
	atkDamageUpgrade = loadImage("libraries/img/shopIcons/atkDmgIcon.png");
	atkRangeUpgrade = loadImage("libraries/img/shopIcons/atkRngIcon.png");
	critUpgrade = loadImage("libraries/img/shopIcons/critIcon.png");
	hpUpgrade = loadImage("libraries/img/shopIcons/hpIcon.png");
	lifeStealUpgrade = loadImage("libraries/img/shopIcons/lStealIcon.png");
	speedUpgrade = loadImage("libraries/img/shopIcons/speedIcon.png");
	atkSpeedUpgrade = loadImage("libraries/img/shopIcons/atkSpdIcon.png");
}

var upgrades = [
	//Add health to player
	health = {
		amount: 20,
		initialCost: 50,
		cost: 50,
		image: hpUpgrade,
		text: "Health",
		describe: "Increase your health and survive longer",
		counter: 0
	},

	//Add attack damage to player
	attack = {
		amount: 2.5,
		initialCost: 100,
		cost: 100,
		image: atkDamageUpgrade,
		text: "Damage",
		describe: "Increase the damage done by your attack",
		counter: 0
	},

	//Make attack range farther
	atkRange = {
		amount: 5,
		initialCost: 125,
		cost: 150,
		image: atkRangeUpgrade,
		text: "Range",
		describe: "Increase the range of your attack",
		counter: 0
	},

	//Get health from damage dealt
	lifeSteal = {
		amount: 0.025,
		initialCost: 200,
		cost: 200,
		image: lifeStealUpgrade,
		text: "Life Steal",
		describe: "Regain health when you deal damage",
		counter: 0
	},

	//Increase player speed
	speed = {
		amount: 0.2,
		initialCost: 100,
		cost: 100,
		image: speedUpgrade,
		text: "Speed",
		describe: "Increase your movement speed",
		counter: 0
	},

	//Shorten attack interval
	atkSpeed = {
		amount: -10,
		initialCost: 100,
		cost: 100,
		image: atkSpeedUpgrade,
		text: "Attack Speed",
		describe: "Decrease the interval between attacks",
		counter: 0
	}
];

//enemy stats
function enemy(health, attack, atkSpeed, atkRange, speed, xPos, yPos, gold, width, height, timer, originalHealth, type, enemyDirection) {
	this.health = health;
	this.attack = attack;
	this.atkSpeed = atkSpeed;
	this.atkRange = atkRange;
	this.speed = speed;
	this.xPos = xPos;
	this.yPos = yPos;
	this.gold = gold;
	this.width = width;
	this.height = height;
	this.timer = timer;
	this.originalHealth = originalHealth;
	this.type = type;
	this.enemyDirection = enemyDirection;
}

//individual enemy stats; 3 types 
var goon = new enemy(30, 2, 500, 5, 2, 10, 10, 3, 32, 32, 0, 30, "goon", "down");
var bigGoon = new enemy(60, 10, 1000, 10, 1.5, 0, 0, 15, 56, 56, 0, 50, "bigGoon", "down");
var golem = new enemy(175, 80, 2000, 15, 0.5, 0, 0, 150, 118, 102, 0, 175, "golem", "down");

var enemySpawn = [goon, bigGoon];

//Health reset variable
var initialHealth = 100;

//player stats
var player = {
	speed: 3,
	attack: 10,
	atkSpeed: 300,
	atkRange: 40,
	lifeSteal: 0,
	crit: 0,
	health: initialHealth,
	xPos: 400,
	yPos: 300,
	gold: 100,
	width: 58,
	height: 84,
	direction: "up"
};

var screen = "menu";

var upgradeSelection = 0;

function movement() {
	//UP
	if ((keyIsDown(UP_ARROW)) && player.yPos >= 0) {
		player.yPos -= player.speed;
	}
	//DOWN
	if ((keyIsDown(DOWN_ARROW)) && player.yPos <= (height - 150 - player.height)) {
		player.yPos += player.speed;
	}
	//RIGHT
	if ((keyIsDown(RIGHT_ARROW)) && player.xPos <= (width - player.width)) {
		player.xPos += player.speed;
	}
	//LEFT
	if ((keyIsDown(LEFT_ARROW)) && player.xPos >= 0) {
		player.xPos -= player.speed;
	}
}

function turn() {
	//UP
	if (keyIsDown(87)) {
		player.direction = "up";
	}
	//DOWN
	if (keyIsDown(83)) {
		player.direction = "down";
	}
	//RIGHT
	if (keyIsDown(68)) {
		player.direction = "right"
	}
	//LEFT
	if (keyIsDown(65)) {
		player.direction = "left";
	}
}

//Display the player
function drawPlayer() {
	fill(255);
	fill(0, 255, 0);

	//Check which way player is moving, and display series of 4 images, at an interval, based on movement
	if ((keyIsDown(UP_ARROW))) {
		if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
			image(up1, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 200 && millis() % 1000 < 500) {
			image(up2, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
			image(up3, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 750 && millis() % 1000 <= 999) {
			image(up2, player.xPos, player.yPos, player.width, player.height);
		}
	} else if ((keyIsDown(DOWN_ARROW))) {
		if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
			image(down1, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 200 && millis() % 1000 < 500) {
			image(down2, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
			image(down3, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 750 && millis() % 1000 <= 999) {
			image(down2, player.xPos, player.yPos, player.width, player.height);
		}
	} else if ((keyIsDown(RIGHT_ARROW))) {
		if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
			image(right1, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 200 && millis() % 1000 < 500) {
			image(right2, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
			image(right3, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 750 && millis() % 1000 <= 999) {
			image(right2, player.xPos, player.yPos, player.width, player.height);
		}
	} else if ((keyIsDown(LEFT_ARROW))) {
		if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
			image(left1, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 200 && millis() % 1000 < 500) {
			image(left2, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
			image(left3, player.xPos, player.yPos, player.width, player.height);
		} else if (millis() % 1000 >= 750 && millis() % 1000 <= 999) {
			image(left2, player.xPos, player.yPos, player.width, player.height);
		}
	} else {
		image(down2, player.xPos, player.yPos, player.width, player.height);
	}

	//Check which way player is aiming, and display aim with an arrow
	if (player.direction === "up") {
		image(aimUp, player.xPos, player.yPos - player.width + 10, player.width,
			player.width);
	} else if (player.direction === "down") {
		image(aimDown, player.xPos, player.yPos + player.height - 10, player.width,
			player.width);
	} else if (player.direction === "right") {
		image(aimRight, player.xPos + player.width - 10, player.yPos + player.height /
			2 - player.width / 2, player.width, player.width);
	} else if (player.direction === "left") {
		image(aimLeft, player.xPos - player.width + 10, player.yPos + player.height /
			2 - player.width / 2, player.width, player.width);
	}
}

enemy.prototype.playerAttack = function() {
	if (player.direction === "up" && player.yPos - (this.yPos + this.height) <=
		player.atkRange && player.yPos - (this.yPos + this.height) >= 0 && Math.abs(
			(player.xPos + player.width / 2) - (this.xPos + this.width / 2)) < player.width /
		2 + this.width / 2) {
		this.health -= player.attack;
		if (player.health < initialHealth) {
			if (player.attack * player.lifeSteal + player.health > initialHealth) {
				player.health = initialHealth;
			} else {
				player.health += player.attack * player.lifeSteal;
			}
		}
	} else if (player.direction === "down" && this.yPos - (player.yPos + player.height) <=
		player.atkRange && this.yPos - (player.yPos + player.height) >= 0 && Math.abs(
			(player.xPos + player.width / 2) - (this.xPos + this.width / 2)) < player.width /
		2 + this.width / 2) {
		this.health -= player.attack;
		if (player.health < initialHealth) {
			if (player.attack * player.lifeSteal + player.health > initialHealth) {
				player.health = initialHealth;
			} else {
				player.health += player.attack * player.lifeSteal;
			}
		}
	} else if (player.direction === "left" && player.xPos - (this.xPos + this.width) <=
		player.atkRange && player.xPos - (this.xPos + this.width) >= 0 && Math.abs((
			player.yPos + player.height / 2) - (this.yPos + this.height / 2)) < player.height /
		2 + this.height / 2) {
		this.health -= player.attack;
		if (player.health < initialHealth) {
			if (player.attack * player.lifeSteal + player.health > initialHealth) {
				player.health = initialHealth;
			} else {
				player.health += player.attack * player.lifeSteal;
			}
		}
	} else if (player.direction === "right" && this.xPos - (player.xPos + player.width) <=
		player.atkRange && this.xPos - (player.xPos + player.width) >= 0 && Math.abs(
			player.yPos - this.yPos) < player.height) {
		this.health -= player.attack;
		if (player.health < initialHealth) {
			if (player.attack * player.lifeSteal + player.health > initialHealth) {
				player.health = initialHealth;
			} else {
				player.health += player.attack * player.lifeSteal;
			}
		}
	} else if (this.xPos >= player.xPos && this.xPos + this.width <= player.xPos +
		player.width && this.yPos >= player.yPos && this.yPos + this.height <=
		player.yPos + player.height) {
		this.health -= player.attack;
		if (player.health < initialHealth) {
			if (player.attack * player.lifeSteal + player.health > initialHealth) {
				player.health = initialHealth;
			} else {
				player.health += player.attack * player.lifeSteal;
			}
		}
	}
};

var hitTime;
var atkCounter = 0;

//ATTACK
function keyPressed() {
	//if spacebar is pressed
	if (screen === "game") {
		if (keyCode === (32)) {

			//attack animation variable
			atkTime = millis();
			atkCounter++;

			//enemy gets attacked if time interval has passed
			if (millis() - hitTime >= player.atkSpeed || atkCounter === 1) {
				for (var i = 0; i < enemySpawn.length; i++) {
					enemySpawn[i].playerAttack();
					hitTime = millis();
				}
			}
		}
	}
	if (screen === "store") {
		if (keyCode === (39)) { //39 is the keycode for right arrow
			upgradeSelection++;
			if (upgradeSelection >= upgrades.length) {
				upgradeSelection = 0;
			}
		} else if (keyCode === (37)) { //37 is the keycode for left arrow
			upgradeSelection--;
			if (upgradeSelection < 0) {
				upgradeSelection = upgrades.length - 1;
			}
		}

		if (keyCode === (13)) { //13 is the keycode for enter

			if (upgrades[upgradeSelection].cost <= player.gold && upgrades[upgradeSelection].counter < 10) {
				player.gold -= upgrades[upgradeSelection].cost;

				if (upgradeSelection === 0) {
					//Apply upgrade
					player.health += upgrades[upgradeSelection].amount;
					initialHealth = player.health;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.25, upgrades[upgradeSelection].counter));
				} else if (upgradeSelection === 1) {
					//Apply upgrade
					player.attack += upgrades[upgradeSelection].amount;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.3, upgrades[upgradeSelection].counter));
				} else if (upgradeSelection === 2) {
					//Apply upgrade
					player.atkRange += upgrades[upgradeSelection].amount;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.3, upgrades[upgradeSelection].counter));
				} else if (upgradeSelection === 3) {
					//Apply upgrade
					player.lifeSteal += upgrades[upgradeSelection].amount;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.3, upgrades[upgradeSelection].counter));
				} else if (upgradeSelection === 4) {
					//Apply upgrade
					player.speed += upgrades[upgradeSelection].amount;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.3, upgrades[upgradeSelection].counter));
				} else if (upgradeSelection === 5) {
					//Apply upgrade
					player.atkSpeed += upgrades[upgradeSelection].amount;

					//Count number of purchases
					upgrades[upgradeSelection].counter++;

					//Exponential cost increase
					upgrades[upgradeSelection].cost = Math.round(upgrades[upgradeSelection].initialCost *
						Math.pow(1.3, upgrades[upgradeSelection].counter));
				}
			}
		}
	}
}

//attack Animation
function attackAnimation() {
	if (player.direction === "up") {
		if (millis() - hitTime <= 100) {
			image(atkUp1, player.xPos + player.width - 23, player.yPos + 18);
		} else if (millis() - hitTime <= 200 && millis() - hitTime > 100) {
			image(atkUp2, player.xPos + player.width - 23, player.yPos + 18);
		} else if (millis() - hitTime <= 300 && millis() - hitTime > 200) {
			image(atkUp3, player.xPos + player.width - 23, player.yPos + 18);
		}
	} else if (player.direction === "down") {
		if (millis() - hitTime <= 100) {
			image(atkDown1, player.xPos + player.width - 23, player.yPos + 60);
		} else if (millis() - hitTime <= 200 && millis() - hitTime > 100) {
			image(atkDown2, player.xPos + player.width - 23, player.yPos + 60);
		} else if (millis() - hitTime <= 300 && millis() - hitTime > 200) {
			image(atkDown3, player.xPos + player.width - 23, player.yPos + 60);
		}
	} else if (player.direction === "right") {
		if (millis() - hitTime <= 100) {
			image(atkRight1, player.xPos + player.width - 21, player.yPos + 55);
		} else if (millis() - hitTime <= 200 && millis() - hitTime > 100) {
			image(atkRight2, player.xPos + player.width - 21, player.yPos + 55);
		} else if (millis() - hitTime <= 300 && millis() - hitTime > 200) {
			image(atkRight3, player.xPos + player.width - 21, player.yPos + 55);
		}
	} else if (player.direction === "left") {
		if (millis() - hitTime <= 100) {
			image(atkLeft1, player.xPos - player.width + 20, player.yPos + 55);
		} else if (millis() - hitTime <= 200 && millis() - hitTime > 100) {
			image(atkLeft2, player.xPos - player.width + 20, player.yPos + 55);
		} else if (millis() - hitTime <= 300 && millis() - hitTime > 200) {
			image(atkLeft3, player.xPos - player.width + 20, player.yPos + 55);
		}
	}
}


enemy.prototype.enemyMove = function() {
	if (enemySpawn.length > 0) {
		//If player is on the left of bigGoon, bigGoon moves left
		if (this.xPos + this.width / 2 > player.xPos + player.width / 2) {
			this.xPos -= this.speed;
		}
		//If player is on the right of bigGoon, bigGoon moves right
		if (this.xPos + this.width / 2 < player.xPos + player.width / 2) {
			this.xPos += this.speed;
		}

		//If player is on top of bigGoon, bigGoon moves up
		if (this.yPos + this.height / 2 > player.yPos + player.height / 2) {
			this.yPos -= this.speed;
			this.enemyDirection = "up";
		}
		//If player is under bigGoon, bigGoon moves down
		if (this.yPos + this.height / 2 < player.yPos + player.height / 2) {
			this.yPos += this.speed;
			this.enemyDirection = "down";
		}
	}
};

var spawnTime = 0;
var spawnLoop = 0;

//spawn enemies

function spawnEnemy() {
	//Find start time

	//spawning different enemies at different time intervals; harder enemies have larger intervals
	if (spawnTime % 1500 === 0 && spawnTime !== 0) {
		enemySpawn.push(new enemy(30, 2, 500, 5, 2, Math.random() * width, Math.random() *
			height - 120, 3, 32, 32, 0, 30, "goon", "up", "left"));
	}
	if (spawnTime % 3000 === 0 && spawnTime !== 0) {
		enemySpawn.push(new enemy(60, 10, 1000, 10, 1.5, Math.random() * width, Math.random() *
			height - 120, 15, 56, 56, 0, 50, "bigGoon", "up", "left"));
	}
	if (spawnTime % 6000 === 0 && spawnTime !== 0) {
		enemySpawn.push(new enemy(175, 80, 2000, 15, 0.5, Math.random() * width, Math.random() *
			height - 120, 150, 118, 102, 0, 175, "golem", "up", "left"));
	}

	spawnTime++;
}

//ENEMIES DROP MONEY WHEN KILLED
var moneyX = [];
var moneyY = [];
var moneyAmount = [];

// //Draw the enemy
enemy.prototype.drawEnemy = function() {

	if (this.health > 0) {

		//Health bar
		fill(255, 0, 0);
		rect(this.xPos, this.yPos - 5, this.width, 3);
		fill(0, 255, 0);
		rect(this.xPos, this.yPos - 5, this.width * this.health / this.originalHealth,
			3);
	}

	//ENEMY MOVEMENT
	//ENEMY MOVING LEFT
	if (this.enemyDirection === "left") {
		if (this.type === "goon") {
			if (millis() % 400 >= 0 && millis() % 400 < 100) {
				image(smallGhoull1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 100 && millis() % 400 < 200) {
				image(smallGhoull2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 200 && millis() % 400 < 300) {
				image(smallGhoull3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 300 && millis() % 400 <= 400) {
				image(smallGhoull2, this.xPos, this.yPos, this.width, this.height);
			}
		}
		if (this.type === "bigGoon") {
			if (millis() % 600 >= 0 && millis() % 600 < 150) {
				image(medGhoull1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 150 && millis() % 600 < 300) {
				image(medGhoull2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 300 && millis() % 600 < 450) {
				image(medGhoull3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 450 && millis() % 600 <= 600) {
				image(medGhoull2, this.xPos, this.yPos, this.width, this.height);
			}
		}
	}
	//ENEMY MOVING RIGHT
	else if (this.enemyDirection === "right") {
		if (this.type === "goon") {
			if (millis() % 400 >= 0 && millis() % 400 < 100) {
				image(smallGhoulr1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 100 && millis() % 400 < 200) {
				image(smallGhoulr2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 200 && millis() % 400 < 300) {
				image(smallGhoulr3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 300 && millis() % 400 <= 400) {
				image(smallGhoulr2, this.xPos, this.yPos, this.width, this.height);
			}
		}
		if (this.type === "bigGoon") {
			if (millis() % 600 >= 0 && millis() % 600 < 150) {
				image(medGhoulr1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 150 && millis() % 600 < 300) {
				image(medGhoulr2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 300 && millis() % 600 < 450) {
				image(medGhoulr3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 450 && millis() % 600 <= 600) {
				image(medGhoulr2, this.xPos, this.yPos, this.width, this.height);
			}
		}
	}
	//ENEMY MOVING DOWN
	else if (this.enemyDirection === "down") {
		if (this.type === "goon") {
			if (millis() % 400 >= 0 && millis() % 400 < 100) {
				image(smallGhoulf1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 100 && millis() % 400 < 200) {
				image(smallGhoulf2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 200 && millis() % 400 < 300) {
				image(smallGhoulf3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 300 && millis() % 400 <= 400) {
				image(smallGhoulf2, this.xPos, this.yPos, this.width, this.height);
			}
		}
		if (this.type === "bigGoon") {
			if (millis() % 600 >= 0 && millis() % 600 < 150) {
				image(medGhoulf1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 150 && millis() % 600 < 300) {
				image(medGhoulf2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 300 && millis() % 600 < 450) {
				image(medGhoulf3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 450 && millis() % 600 <= 600) {
				image(medGhoulf2, this.xPos, this.yPos, this.width, this.height);
			}
		}
		if (this.type === "golem") { 
			if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
				image(bigGhoulf1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 250 && millis() % 1000 < 500) {
				image(bigGhoulf2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
				image(bigGhoulf3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 750 && millis() % 1000 <= 1000) {
				image(bigGhoulf2, this.xPos, this.yPos, this.width, this.height);
			}
		}

	}
	//ENEMY MOVING UP
	else if (this.enemyDirection === "up") {
		if (this.type === "goon") {
			if (millis() % 400 >= 0 && millis() % 400 < 100) {
				image(smallGhoulb1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 100 && millis() % 400 < 200) {
				image(smallGhoulb2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 200 && millis() % 400 < 300) {
				image(smallGhoulb3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 400 >= 300 && millis() % 400 <= 400) {
				image(smallGhoulb2, this.xPos, this.yPos, this.width, this.height);
			}
		}
		if (this.type === "bigGoon") {
			if (millis() % 600 >= 0 && millis() % 600 < 150) {
				image(medGhoulb1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 150 && millis() % 600 < 300) {
				image(medGhoulb2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 300 && millis() % 600 < 450) {
				image(medGhoulb3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 600 >= 450 && millis() % 600 <= 600) {
				image(medGhoulb2, this.xPos, this.yPos, this.width, this.height);
			}
		}
			if (this.type === "golem") {
			if (millis() % 1000 >= 0 && millis() % 1000 < 250) {
				image(bigGhoulb1, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 250 && millis() % 1000 < 500) {
				image(bigGhoulb2, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 500 && millis() % 1000 < 750) {
				image(bigGhoulb3, this.xPos, this.yPos, this.width, this.height);
			} else if (millis() % 1000 >= 750 && millis() % 1000 <= 1000) {
				image(bigGhoulb2, this.xPos, this.yPos, this.width, this.height);
			}
		}

	}

	//Drop money
	if (this.health <= 0) {
		moneyX.push(this.xPos);
		moneyY.push(this.yPos);
		moneyAmount.push(this.gold);

		if (this.type === "goon") {
			this.health = this.originalHealth;
			this.xPos = Math.random() * width;
			this.yPos = Math.random() * height - 120;
		} else if (this.type === "bigGoon") {
			this.health = this.originalHealth;
			this.xPos = Math.random() * width;
			this.yPos = Math.random() * height - 120;
		} else if (this.type === "golem") {
			ethis.health = this.originalHealth;
			this.xPos = Math.random() * width;
			this.yPos = Math.random() * height - 120;
		}
	}
};

//Dropping the money
function dropMoney() {
	for (var i = 0; i < moneyX.length; i++) {
		fill(255, 255, 0);
		image(coin, moneyX[i], moneyY[i], 10, 10);
	}
}

//Picking up the money
function pickUpMoney() {
	for (var i = 0; i < moneyX.length; i++) {
		if (Math.abs((player.xPos + player.width / 2) - (moneyX[i] - 5)) < player.width /
			2 && Math.abs((player.yPos + player.height / 2) - moneyY[i]) < player.height /
			2) {
			player.gold += moneyAmount[i];
			moneyX.splice(i, 1);
			moneyY.splice(i, 1);
			moneyAmount.splice(i, 1);
		}
	}
}

//ENEMY ATTACK INTERVALS
enemy.prototype.enemyAttack = function() {
	if (Math.abs(player.yPos - this.yPos) <= this.atkRange && Math.abs(player.xPos -
			this.xPos) < this.atkRange || this.xPos > player.xPos && this.xPos + this.width <
		player.xPos + player.width && this.yPos > player.yPos && this.yPos + this.height <
		player.yPos + player.height) {
		if (millis() - this.timer >= this.atkSpeed) {
			player.health -= this.attack;
			this.timer = millis();
		}
	}
};

var superHealth, superAttack, superSpeed, superRange, superAtkSpeed, lotsOfMoney;
function cheatCodes () {
	if (superHealth === "superHealth123") {
		player.initalHealth = 1000;
	}
	if (superAttack === "superAttack987") {
		player.attack = 40;
	}
	if (superSpeed === "superSpeed321") {
		player.speed = 10;
	}
	if (superRange === "rangeSuper654") {
		player.atkRange = 100;
	}
	if (superAtkSpeed === "attackFaster") {
		player.atkSpeed = 50;
	}
	if (lotsOfMoney === "makeItRain") {
		player.gold = 99999;
	}
	lotsOfMoney = null;
}

function playUI() {
	//display hud
	image(hud, 0, 0, width, height);
	fill(255, 175, 2);
	textFont(reg);
	textSize(25);
	text("$" + player.gold, 38, height - 20);

	noStroke();

	//Health bar
	fill(0, 255, 0);
	rect(305, height - 85, 706 * player.health / initialHealth, 15);

	//Anti-spam filter
	fill(20, 20, 170);
	if (hitTime === millis()) {} else if (millis() - hitTime >= player.atkSpeed ||
		hitTime === null) {
		rect(570, height - 45, 440, 13);
	} else if (millis() - hitTime < player.atkSpeed && millis() - hitTime > 0) {
		rect(570, height - 45, 440 * (millis() - hitTime) / player.atkSpeed, 13);
	}
}

function deathScreen() {
	if (keyIsDown(27)) { // 27 is the keycode for ESCAPE
		screen = "menu";
	}
	image(dScreen, 0, 0, width, height);
	//RESETTING GAME 
	player.health = initialHealth;
	goon.health = 30;
	bigGoon.health = 50;
	goon.xPos = Math.random() * width;
	goon.yPos = Math.random() * height;
	bigGoon.xPos = Math.random() * width;
	bigGoon.yPos = Math.random() * height;
	player.xPos = width / 2;
	player.yPos = height / 2;
	moneyX.splice(0, moneyX.length);
	moneyY.splice(0, moneyY.length);
	moneyAmount.splice(0, moneyAmount.length);
	atkCounter = 0;
	spawnTime = 0;
	enemySpawn.splice(0, enemySpawn.length);
	enemySpawn.push(goon);
	enemySpawn.push(bigGoon);

	//message
	textFont(reg);
	fill(255, 175, 2);
	textSize(30);
	text("Press ESC to go to Menu", 236, 100);
	textSize(25);
	text("GOLD : " + player.gold, width / 2 + 150, height / 2)
}

function menu() {
	if (keyIsDown(73)) { // 73 is the keycode for 'i'
		screen = "instructions";
	} else if (keyIsDown(32)) { // 32 is space
		screen = "game";
	} else if (keyIsDown(85)) { // 85 is "u"
		screen = "store";
	}
	//display menu
	background(255, 0, 0);
	fill(255, 175, 2);
	image(menuBack, 0, 0, width, height);
	textSize(40);
	textFont(reg);
	textAlign(LEFT);
	//player gold
	text(player.gold, width - 165, height - 460);
	//animate torches and start prompt
	if (millis() % 750 <= 375) {
		image(startPrompt, 175, 310, 680, 75);
	}
	if (millis() % 750 >= 0 && millis() % 750 < 250) {
		image(flame1, 104, 90, 90, 125);
		image(flame1, 844, 90, 90, 125);
	} else if (millis() % 750 >= 250 && millis() % 750 < 500) {
		image(flame2, 104, 90, 90, 125);
		image(flame2, 844, 90, 90, 125);
	} else if (millis() % 750 >= 500 && millis() % 750 < 750) {
		image(flame3, 104, 90, 90, 125);
		image(flame3, 844, 90, 90, 125);
	}
}

function store() {
	if (keyIsDown(27)) { // 27 is the keycode for ESCAPE
		screen = "menu";
	}
	//displaying background and animating flames
	background(0, 0, 0);
	image(shop, 0, 0, width, height);
	fill(255, 175, 2);
	if (millis() % 750 >= 0 && millis() % 750 < 250) {
		image(flame1, 110, 17, 90, 125);
		image(flame1, 818, 17, 90, 125);
	} else if (millis() % 750 >= 250 && millis() % 750 < 500) {
		image(flame2, 110, 17, 90, 125);
		image(flame2, 818, 17, 90, 125);
	} else if (millis() % 750 >= 500 && millis() % 750 < 750) {
		image(flame3, 110, 17, 90, 125);
		image(flame3, 818, 17, 90, 125);
	}
	//messages
	textSize(15);
	textFont(reg);
	textAlign(CENTER);
	text("Press ESC to go back", width / 2, height / 2 - 235);
	textSize(20);
	text("Use arrow keys to select to select upgrade", width / 2, height - 100);
	text("Press enter to buy", width / 2, height - 65);

	textAlign(LEFT);
	text("Gold: " + player.gold, 40, height - 65);

	textAlign(CENTER);
	//Display Upgrades
	for (var i = 0; i < 250; i += 25) {
		image(upBlockEmpty, 450 + i, 380);
	}
	if (upgradeSelection === 0) {
		image(hpUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	} else if (upgradeSelection === 1) {
		image(atkDamageUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	} else if (upgradeSelection === 2) {
		image(atkRangeUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	} else if (upgradeSelection === 3) {
		image(lifeStealUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	} else if (upgradeSelection === 4) {
		image(speedUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	} else if (upgradeSelection === 5) {
		image(atkSpeedUpgrade, width / 2 - 25, height / 2 - 70);
		for (var i = 0; i < upgrades[upgradeSelection].counter * 25; i += 25) {
			image(upBlock, 450 + i, 380);
		}
	}
	text(upgrades[upgradeSelection].text, width / 2 + 50, height / 2 + 150);
	if (upgrades[upgradeSelection].counter < 10) {
		text("Cost: " + upgrades[upgradeSelection].cost, width / 2 + 350, height / 2 + 120);
	} else {
		text("Fully Upgraded", width / 2 + 350, height / 2 + 120);
	}
	textSize(15);
	text(upgrades[upgradeSelection].describe, width / 2 + 250, height / 2, 200);
}

function instructions() {
	if (keyIsDown(27)) { // 27 is the keycode for ESCAPE
		screen = "menu";
	}
	//display instructions
	background(0, 0, 0);
	image(instru, 0, 0, width, height);
}

function game() {
	if (keyIsDown(80)) { // 80 is the keycode for "p"
		screen = "pause";
	}

	background(0);
	playUI();
	dropMoney();
	pickUpMoney();

	//Draw player
	drawPlayer();
	attackAnimation();

	//move player
	movement();

	//player direction
	turn();

	spawnEnemy();

	for (var i = 0; i < enemySpawn.length; i++) {
		//Draw enemy
		enemySpawn[i].drawEnemy();

		//move enemies
		enemySpawn[i].enemyMove();

		enemySpawn[i].enemyAttack();
	}
	if (player.health <= 0) {
		screen = "death";
	}
}

function pause() {
	if (keyIsDown(32)) { // 32 is "space"
		screen = "game";
	}
	background(0, 0, 0);
	image(pMenu, 0, 0, width, height);
	fill(255, 175, 2);
	textSize(50);
	textFont(reg);
	text("GAME IS PAUSED", width / 2 - 200, height / 2 - 100);
	textSize(30);
	text("Press SPACE to resume", width / 2 - 200, height / 2 - 40);
}

function draw() {
	if (screen === "menu") {
		menu();
	} else if (screen === "game") {
		game();
	} else if (screen === "instructions") {
		instructions();
	} else if (screen === "store") {
		store();
	} else if (screen === "pause") {
		pause();
	} else if (screen === "death") {
		deathScreen();
	}
	
	cheatCodes();
}