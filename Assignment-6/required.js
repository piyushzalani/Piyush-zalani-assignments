
function validate(Name) {
    if (myTrim(Name) != ""){
		alert("false");
	}
    else {alert("true"); return false;}
    
return true;
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
