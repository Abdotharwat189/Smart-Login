var smartdata = []
if (localStorage.getItem("smartdata")) {
    

    smartdata = JSON.parse(localStorage.getItem("smartdata"))
}

var Email = document.getElementById("Email");
var Password = document.getElementById("Password");

function Login() {

     if (isExist()){
        localStorage.setItem("smartdata", JSON.stringify(smartdata));
        document.querySelector(".error").classList.add("d-none")


        window.open("../home.html") 
     }  
        Clear();

}  

function Clear() {
    Email.value = "";
    Password.value = "";
}
function isExist(){
    for (var i = 0;  i < smartdata.length ; i++) {
        if (smartdata[i].createEmail1 == Email.value&&smartdata[i].createPassword==Password.value) {
            localStorage.setItem("name",smartdata[i].createName)
            document.querySelector(".error").classList.remove("d-none")


            return true
            
        }
        
    }
    return false
}


