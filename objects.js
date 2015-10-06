/*** --- Protype --- ***/
function House(rooms, color, size) {
	this.rooms = rooms;
	this.color = color;
	this.size = size;
}

House.prototype.describeHouse = function() {
	return 'Your house has ' + this.rooms + ' rooms is, ' + this.color + ' color and ' + this.size + ' size';
};

House.prototype.houseCode = function(newCode) {
	var random = Math.floor(Math.random() * 1000) + 'a';
	return newCode || random;
};

var myHouse = new House(4, 'blue', 'medium');

myHouse.describeHouse();
myHouse.houseCode();
myHouse.houseCode('223b');

/*** --- Object.create() --- ***/

var building = {
	rooms: 4,
	color: 'blue',
	size: 'medium',
	describeBuilding: function() {
		return 'Your house has ' + this.rooms + ' rooms is, ' + 
			this.color + ' color and ' + 
			this.size + ' size';
	},
	houseCode: function(newCode) {
		var random = Math.floor(Math.random() * 1000) + 'a';
		return newCode || random;
	},
};

var myBuilding = Object.create(building);
myBuilding.size = 'big';

console.log(myBuilding.rooms);
myBuilding.describeBuilding();
myBuilding.houseCode();