// ini javascript

// let name = prompt("Siapa namamu?");

// console.log('name')

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document. forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("tidak boleh ada yang kosong");

        return false
    }
    setSenderUI (name, birthDate, gender, message);

    return true;
}

function setSenderUI(name, birthDate, gender, message){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = message;
}