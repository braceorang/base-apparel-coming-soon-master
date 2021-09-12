
var email = document.getElementById("email");
document.getElementById("form1").addEventListener("submit",function(){
    event.preventDefault();
    if(validateEmail(email.value) ==  false){
        document.getElementById("btnSignal").classList.remove("error");
        document.getElementById("warningText").classList.remove("error");
        document.getElementById("email").classList.add("borderWarning");
    }else{
        alert("thank you");
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


