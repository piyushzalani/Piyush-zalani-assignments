var chain = function(){
		this.i = 0;
    
    this.add = function(i){
    		this.i += i;
    		return this;  // this help in function chaining
    };
    this.sub = function(i){
    		this.i -= i;
    		return this;  // this help in function chaining
    };
		        
    this.print = function() {
    		console.log(this.i);
    };
}

var obj = new chain();
obj.add(3).sub(2).print();