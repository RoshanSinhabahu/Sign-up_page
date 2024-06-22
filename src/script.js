function validateForm(){
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const ConfPass=document.getElementById("confpassword").value;


    const mailInclude=/@.*\.com/;
    const PwInclude=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-_=+]).{8,}$/

    const mailCheck=mailInclude.test(email);
    const pwdCheck=PwInclude.test(password);

    if(name==""||age==""||email==""||password==""||ConfPass==''){
        alert("Fill all fields.");
        return false;
    }
    else if(age<18){
        alert("You should atleast 18 years old to apply.");
        return false;
    }
    else if(!mailCheck){
        alert("Provide a valid email.");
        return false;
    }
    else if(!pwdCheck){
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.");
        return false;
    }
    else if(!(password==ConfPass)){
        alert("Password doesn't match.");
        return false;
    }
    else{
        alert("Submitted!"+"\n\nName : "+name+"\nAge : "+age+"\nEmail : "+email);
        return true;
    }
}
function ClearForm(){
    document.getElementById("form1").reset();
}