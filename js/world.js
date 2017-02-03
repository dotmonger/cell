function World(game_window, window_size) {
	this.game_window = game_window;
	this.size = window_size;

	this.creatures = [];
	for (var i=0;i<Math.random()*20;i++) {
		var new_c = new Creature(Math.round(Math.random()*5), this);
		this.creatures.push(new_c);
	}
	// console.log(this.creatures);
	
	this.interval = null
}

World.prototype.run = function() {
	var interval_length = 1000;
	this.interval = setInterval(function(self) { return function() { self.loop_content(); } ; }(this), interval_length);
};

World.prototype.loop_content = function() {
	// run all cratures state
	this.creatures.forEach(function(creature) {
		creature.state.run();
	});

	// render map background
	var map = [];
	for (var i = 0; i < this.size; i++) {
		var row = [];
		for (var j = 0; j < this.size; j++) {
			row.push('.');
		} 
		map.push(row);
	}

	// render crature
	for (var i = 0; i < this.creatures.length; i++) {
		creature = this.creatures[i];
		map[creature.x][creature.y] = creature.symbol;
	}

	// output
	var s = '';
	for (var i = 0; i < this.size; i++) {
		for (var j = 0; j < this.size; j++) {
			s += map[i][j];
		}
		s += '<br/>';
	}
	this.game_window.innerHTML = s;
};

World.prototype.stop = function() {
	clearInterval(this.interval);
};