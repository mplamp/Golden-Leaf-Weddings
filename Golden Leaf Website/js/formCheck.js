// JavaScript Document
$(document).ready(function(){
"use strict";
	
	$( "#contSubmit" ).submit(function( event ) {
  event.preventDefault();
});
	
function validateForm() {
    var x = document.forms["contForm"]["fname"].value;
    if (x === "") {
        alert("First Name must be filled out");
        return false;
    }
	var l = document.forms["contForm"]["lname"].value;
    if (l === "") {
        alert("Last Name must be filled out");
        return false;
    }
	var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

});