var chain = function(){
	var i = 0;
    
   var add = function(j){
    		i += j;
    		return this;  // this help in function chaining
    };
    var sub = function(j){
			i -= j;
    		return this;  // this help in function chaining
    };
		        
    var print = function() {
    		console.log(i);
    };
	
	return {add:add, sub:sub, print:print};
	
}

var obj = new chain();
obj.add(3).sub(2).print();