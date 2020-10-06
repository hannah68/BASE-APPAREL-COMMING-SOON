const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.querySelector('button'); 


button.addEventListener('click',() => button.style.background = 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%)')

//show error messaage and red border************************
function showError(input,message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//show green border(success message)************************
function showSuccess(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//show email example****************************************
function showEmailExample(input,message){
	const formControl = input.parentElement;
	const emailExample = formControl.querySelector('.email');
	emailExample.value = message;
}

//check the input isnot empty*******************************
function checkRequired(input){
	let isRequired = false;
	if(input.value.trim() === ''){
		showError(input, 'email cannot be empty');
		isRequired = true;
	}else{
		showSuccess(input)
	}
	return isRequired;
}


// Check email is valid//*************************************
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Please provide a valid email');
    showEmailExample(input,'email@example.com');
  }
}


//addeventlistenr******************************************
form.addEventListener('submit',function(e){
	e.preventDefault();
	
	if(!checkRequired(email)){
		checkEmail(email);
	}
});




