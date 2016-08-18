var job = function() {
		this.plays = true;
};

job.prototype.print = function() {
	console.log(this.plays ? "Hire me" : "no thanks");
};

var techJob = function(title, pays) {
		job.call(this);
    
    this.title = title;
    this.pays = pays;
    
}

techJob.prototype = Object.create(job.prototype);
techJob.prototype.construtor = techJob;

var position = new techJob("js programmer", true);

console.log(position.print());
