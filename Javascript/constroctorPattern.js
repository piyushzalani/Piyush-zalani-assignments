var personContructor = function(name, age, state) {
	
	
	this.age = age;
	this.name = name;
	this.state = state;
	
	this.printPerson = function() {
		console.log(this.name + " " + this.age + " " + this.state);
	};
	

};



var person2 = new personContructor("abc", 27, 'AA');
var person1 = new personContructor("qwe", 23, 'CA');

person1.printPerson();
person2.printPerson();
