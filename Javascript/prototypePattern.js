var proto = function(name, age, state) {
	
};
	proto.prototype.age = 0;
	proto.prototype.name = "no name";
	proto.prototype.state = "no city";
	
proto.prototype.printPerson = function() {
	console.log(this.name + " " + this.age + " " + this.state);
};

var person1 = new proto();
person1.age = 23;
person1.name = "Piyush";
person1.state = "India";

console.log('name' in proto);
console.log(person1.hasOwnProperty('name'));
person1.printPerson();