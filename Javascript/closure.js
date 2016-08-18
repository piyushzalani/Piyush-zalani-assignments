var passed = 3;

var addTo = function(passed) {
	var inner = 2;
	rturn passed + inner;
};

consoole.log(addTo(3));


// lexical scop is outside variable is acsesed inside function but not vise versa

var addTo = function(passed) {
	var add = function(inner) {
		return passed + inner;
	}
	
	return add;
};

conole.dir(addTo(3));

var addThree = new addTo(3);


console.log(addThree(1));


// closure is function with preserved data or function that can access var outside funcion is closure