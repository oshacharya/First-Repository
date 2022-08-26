function validateForm() {
  let a = document.getElementById("fname").value
  let b = document.getElementById("mail").value
  let c = document.getElementById("city").value
  let d = document.getElementById("number").value

  var regEmail =/^([a-z A-Z 0-9_\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-Z 0-9]{2,4})+$/;
  var regPhone = /^\d{10}$/;

  if (a == "" ) {
    alert("Please enter name properly")
    return false
  } else if (b == "" || !regEmail.test(b)) {
    alert("Email must be in correct format")
    return false
  } else if (c == "") {
    alert("City must be filled  out")
    return false
  }
    else if (c == "") {
      alert("City must be filled  out")
      return false
  } else if (d == "" ||!regPhone.test(d)||d<10  ) 
  {
      
      alert("number must be filled  out")        
  }

  document.write("Submitted Data Successfully");
  document.write("\n Name - " + a);
  document.write("\n Email - " + b);
  document.write("\n City - " + c);
  document.write("\n Number - " + d);
}