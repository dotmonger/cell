function polar_random() {
	/*if (Math.random() < 0.5)
		return 1;
	else
		return -1;*/
	r = Math.random() - 0.5;
	return Math.round(r/Math.abs(r));
}

function state_random(obj) {
	r = Math.random()*2;
	if (r <= 1)
		return new state_rest(obj);
	if (r <= 2)
		return new state_move_random(obj);
}

// ---------------------------------------
function state_rest(obj) {
	this.obj = obj;
	this.period = Math.round(Math.random()*10);
}

state_rest.prototype.run = function() {
	if (this.period <= 0) {
		this.obj.state = state_random(this.obj);
	}

	this.period --;
};

// ---------------------------------------
function state_move_random(obj) {
	this.obj = obj;
	this.direction = {
		'x' : polar_random(),
		'y' : polar_random(),
	}
	this.distance = Math.round(Math.random() * this.obj.world.size);
}

state_move_random.prototype.run = function() {
	if (this.distance <= 0)
		this.obj.state = state_random(this.obj);

	this.obj.x += this.direction.x;
	this.obj.y += this.direction.y;
	this.distance--;

	if (this.obj.x < 0) {
		this.obj.x = 0;
		this.obj.state = new state_move_random(this.obj);
	}
	if (this.obj.x >= this.obj.world.size) {
		this.obj.x = this.obj.world.size-1;
		this.obj.state = new state_move_random(this.obj);
	}
	if (this.obj.y < 0) {
		this.obj.y = 0;
		this.obj.state = new state_move_random(this.obj);
	}
	if (this.obj.y >= this.obj.world.size) {
		this.obj.y = this.obj.world.size-1;
		this.obj.state = new state_move_random(this.obj);
	}
};