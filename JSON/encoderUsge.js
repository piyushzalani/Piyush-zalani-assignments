var json_string = array2json(['e', {pluribus: 'unum'}]);//Returns '["e", {"pluribus": "unum"}]' 

var data = {
			"success":"Sweet",
			"failure":false,
			"empty_array":[],
			"numbers":[1,2,3],
			"info":{
				"name":"Binny",
				"site":"http:\/\/www.openjs.com\/"
			}
		};
var json = array2json(data); // Returns {"success":"Sweet","failure":false,"empty_array":[],"numbers":[1,2,3],"info":{"name":"Binny","site":"http:\/\/www.openjs.com\/"}}