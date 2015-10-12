

var inputs =['First Name', 'Last Name', 'Street Address 1', 'City', 'State', 'Zip', 'Phone', 'Payment Method', 'Credit Card Number', 'Credit Exp Month', 'Credit Exp Year'];
//var validators = [validateNames, validateAddress, validateLocale];

var validateAll = function() {
	var firstName = document.forms['purchase_order']['firstName'].value;
	var lastName = document.forms['purchase_order']['lastName'].value;
	var streetAddress1 = document.forms['purchase_order']['streetAddress1'].value;
	var city = document.forms['purchase_order']['city'].value;
	var state = document.forms['purchase_order']['state'].value;
	var zip = document.forms['purchase_order']['zip'].value;
	var phone = document.forms['purchase_order']['phone'].value;
	var method = document.forms['purchase_order']['ccard'].value;
	var ccnum = document.forms['purchase_order']['creditCardNumber'].value;
	var expm = document.forms['purchase_order']['expMonth'].value;
	var expy = document.forms['purchase_order']['expYear'].value;
	var submit = document.forms['purchase_order']['submit'];

	var alertString = 'You must include: ';

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

	if(phone == '') {
		alertString += '\n' + inputs[6];
		alert(alertString);
		return false;
	}

	if(method == '') {
		alertString += '\n' + inputs[7];
		alert(alertString);
		return false;
	}

	if(ccnum == '') {
		alertString += '\n' + inputs[8];
		alert(alertString);
		return false;
	}

	if(expm == 'MO') {
		alertString += '\n' + inputs[9];
		alert(alertString);
		return false;
	}

	if(expy == 'YEAR') {
		alertString += '\n' + inputs[10];
		alert(alertString);
		return false;
	}

}

submit.addEventListener('click', validateAll);