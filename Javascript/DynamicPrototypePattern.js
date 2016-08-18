var dynamicProto = function(name, age, state) {
	
	
	this.age = age;
	this.name = name;
	this.state = state;
	
	if(typeof this.printPerson !== 'function') {
		dynamicProto.prototype.printPerson = function() {
			console.log(this.name + " " + this.age + " " + this.state);
		};
	}
	
	
};



var person2 = new dynamicProto("abc", 27, 'AA');
var person1 = new dynamicProto("qwe", 23, 'CA');

person1.printPerson();
person2.printPerson();
