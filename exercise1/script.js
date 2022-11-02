function validate() {
  let pass1 = document.getElementById('pass1').value;
  let pass2 = document.getElementById('pass2').value;
  let element = document.getElementById('message');

  if (pass1 !== pass2) {
    alert("The passwords entered don't match");
    element.innerHTML = "The passwords don't match";
  }
  //Don't have to check both passwords because for this else statement they match so they're the same length
  else if (pass1.length < 8) {
    alert("The password is less than 8 characters long");
    element.innerHTML = "The passwords are less than 8 characters long";
  }
  else {
    element.innerHTML = "The passwords match!";
  }
}
