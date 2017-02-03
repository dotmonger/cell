function Creature(level, world) {
	this.level = level;
	this.world = world;
	this.symbol = String.fromCharCode("A".charCodeAt(0) + level);
	this.x = Math.round(Math.random()*world.size);
	this.y = Math.round(Math.random()*world.size);

	this.state = state_random(this);
}