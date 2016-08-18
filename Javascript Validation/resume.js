function validate() {
	var form = document.details;

	if( form.firstName.value == "" )
	{
		alert( "Please provide your First name!" );
		document.getElementById("firstName").style.borderColor = 'red';
		form.focus();
		form.trim();
		return false;
	} else{
		document.getElementById("firstName").style.borderColor = "green";
	}

	if( form.lastName.value == "" )
	{
		alert( "Please provide your Last Name" );
		document.getElementById("lastName").style.borderColor = 'red';
		form.focus();
		return false;
	}else {
	document.getElementById("lastName").style.borderColor = 'green';
	}

	if(form.email.value == "") {
		alert("Please provide Email address");
		document.getElementById("email").style.borderColor = 'red';
		form.focus();
		return false;
	}else {
		document.getElementById("email").style.borderColor = 'green';
	}

	if( form.phoneNumber.value == "" )
	{
		alert( "Please provide your Phone Number" );
		document.getElementById("phoneNumber").style.borderColor = 'red';
		form.focus();
		return false;
	}else {
		document.getElementById("phoneNumber").style.borderColor = 'green';
	}
	
	if( form.Linkdin.value == "" )
	{
		alert( "Please provide Linkdin url" );
		document.getElementById("Linkdin").style.borderColor = 'red';
		form.focus();
		return false;
	}else {
		document.getElementById("Linkdin").style.borderColor = 'green';
	}
	
	if( form.date.value == "" )
	{
		alert( "Please provide DOB" );
		document.getElementById("date").style.borderColor = 'red';
		form.focus();
		return false;
	}else {
		document.getElementById("date").style.borderColor = 'green';
	}

	return( true );
}
	
/*
function validateEmail() {
	 var emailID = form.Email.value;
	 atpos = emailID.indexOf("@");
	 dotpos = emailID.lastIndexOf(".");
	 
	 if (atpos < 1 || ( dotpos - atpos < 2 )) 
	 {
		alert("Please enter correct email ID");
		form.Email.focus() ;
		return false;
	 }
	 return( true );
} 


function isEmpty(fieldname){
	var selector = document.getElementsByTagName("input") ;
	
	if(selector.value == "" || selector.value == null){
		alert("Fill all fields")
		return false;
	}else {
		
	}
	return true;
}

*/



