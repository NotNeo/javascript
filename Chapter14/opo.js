var firstName = document.forms['purchase_order']['firstName'].value;
var lastName = document.forms['purchase_order']['lastName'].value;
var streetAddress1 = document.forms['purchase_order']['streetAddress1'].value;
var streetAddress2 = document.forms['purchase_order']['streetAddress2'].value;
var city = document.forms['purchase_order']['city'].value;
var state = document.forms['purchase_order']['state'].value;
var zip = document.forms['purchase_order']['zip'].value;
var phone = document.forms['purchase_order']['phone'].value;
var fax = document.forms['purchase_order']['fax'].value;
var creditCard = document.forms['purchase_order']['creditCard'].value;
var visa = document.forms['purchase_order']['visa'].value;
var amex = document.forms['purchase_order']['masterCard'].value;
var submit = document.forms['purchase_order']['amex'].value;


var inputs =['First Name', 'Last Name', 'Street Address 1', 'Street Address 2', 'City', 'State', 'Zip', 'Phone', 'Fax', 'Credit Card', 'Visa', 'Master Card', 'American Express'];

function validateAll(){
  for(var i = 0; i<=inputs.length -1; i++) {
    if (inputs[i].value===null) {   
      // alert('You must enter' + inputs[i]); 
      alert(firstName.value);
    }
  }
}


// document.addEventListener('submit', function(){ 
//   validateAll();
// });

