var createName = document.getElementById("createName");
var createEmail = document.getElementById("createEmail");
var createPassword = document.getElementById("createPassword");



var smartdata = []

if (JSON.parse(localStorage.getItem("smartdata")) ) {

    smartdata = JSON.parse(localStorage.getItem("smartdata"))
}



function addData() {
  console.log(smartdata)
  console.log(isExist())


    if (dateValidation(createName)&&dateValidation(createEmail)&&dateValidation(createPassword)&&isExist()) {

        var data = {
            createName: createName.value,
            createEmail1: createEmail.value,
            createPassword: createPassword.value
        }

        smartdata.push(data);
        localStorage.setItem("smartdata", JSON.stringify(smartdata));
        Clear();
        document.querySelector(".exist").classList.add("d-none")
        window.open("../index.html")


    }
}

function Clear() {
    createName.value = "";
    createEmail.value = "";
    createPassword.value = "";
}



function dateValidation(element) {

    var regex = {
        createName: /^[[a-zA-Z][a-zA-Z]{2,}$/,
        createEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        createPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    }
    if (regex[element.id].test(element.value)) {

        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true

    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        return false
    }

}

function isExist(){
    for (var i = 0;  i < smartdata.length ; i++) {
        if (smartdata[i].createEmail1 == createEmail.value) {
            document.querySelector(".exist").classList.remove("d-none")
            return false
            
        }
        
    }
    return true
}

