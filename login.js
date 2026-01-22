let email=document.getElementById("email");
let password=document.getElementById("password")
let err=document.getElementById("err");

function loginvalidation(){
    let emailval=email.value
    let passwordval=password.value;
    let emailpattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
      // validation start here 
      // email validation
     if(emailval===""){
        err.innerHTML="**Please fill the Email**";
        return false;
     }
        // password validation
     if(passwordval===""){
        err.innerHTML="Please enter the password";
        return false;
     }
      // password length validation
     if(passwordval.length<6){
        err.innerHTML="**Password Length must be at least 6 characters**";
        return false;
     }
       // email pattern validation
    if(!emailval.match(emailpattern)){
        err.innerHTML="**Invalid Email**";
        return false;
    }
    // login success message
    alert("login Successful");
    return true;
}