// ini javascript

function replaceName(){
    let name = prompt("Siapa namamu?")
    document.getElementById("welcome-speech").innerHTML = name;
}

replaceName();

function validateForm(){
    let name = document.getElementById("nama").value;
    let birthDate = document.getElementById("tgl-lahir").value;
    let gender = document.getElementById("sender-gender").value;
    let message = document.getElementById("pesan").value;

    if (name == "" || birthDate == "" || gender == "" || message == ""){
        alert("tidak boleh ada yang kosong")

    } else {
        document.getElementById("hasil-nama").innerHTML = name;
        document.getElementById("hasil-tgl-lahir").innerHTML = birthDate;
        document.getElementById("hasil-gender").innerHTML = gender;
        document.getElementById("hasil-pesan").innerHTML = message;
        

    }
}


