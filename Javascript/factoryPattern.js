var personFactory = function(name, age, state) {
	
	var temp = {};
	temp.age = age;
	temp.name = name;
	temp.state = state;
	
	temp.printPerson = function() {
		console.log(this.name + " " + this.age + " " + this.state);
	};
	
	return temp;
};



var person1 = personFactory("qwe", 23, 'CA');
var person2 = personFactory("abc", 27, 'AA');

person1.printPerson();
person2.printPerson();
