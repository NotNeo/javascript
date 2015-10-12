var po = document.getElementById('purchase_order');
var alertString = 'You must include: ';
var firstName = document.forms['purchase_order']['firstName'].value;
var lastName = document.forms['purchase_order']['lastName'].value;
var streetAddress1 = document.forms['purchase_order']['streetAddress1'].value;
var city = document.forms['purchase_order']['city'].value;
var state = document.forms['purchase_order']['state'].value;
var zip = document.forms['purchase_order']['zip'].value;
var phone = document.forms['purchase_order']['phone'].value;
var fax = document.forms['purchase_order']['fax'].value;
var creditCard = document.forms['purchase_order']['creditCard'].value;
var visa = document.forms['purchase_order']['visa'].value;
var masterCard = document.forms['purchase_order']['masterCard'].value;
var amex = document.forms['purchase_order']['amex'].value;
var submit = document.forms['purchase_order']['submit'];

var inputs =['First Name', 'Last Name', 'Street Address 1', 'City', 'State', 'Zip', 'Phone', 'Fax', 'Credit Card', 'Visa', 'Master Card', 'American Express'];
//var validators = [validateNames, validateAddress, validateLocale];

function validateAll() {
	if(firstName == '') {
		alertString += '\n' + inputs[0];
		alert(alertString);
		return false;
	}

	if(lastName == '') {
		alertString += '\n' + inputs[1];
		alert(alertString);
		return false;
	}

	if(streetAddress1 == '') {
		alertString += '\n' + inputs[2];
		alert(alertString);
		return false;
	}

	if(city == '') {
		alertString += '\n' + inputs[3];
		alert(alertString);
		return false;
	}

	if(state == '') {
		alertString += '\n' + inputs[4];
		alert(alertString);
		return false;
	}

	if(zip == '') {
		alertString += '\n' + inputs[5];
		alert(alertString);
		return false;
	}

	alert(firstName);
}

//window.onLoad=submit.addEventListener('click', validateAll());