function DangKi() {
    psswrd = document.getElementById("mk").value;
    confirmpsswrd = document.getElementById("xnmk").value;
    if (psswrd == confirmpsswrd) {
        document.getElementById("a1").innerHTML = "Username: " + document.getElementById("tentk").value;
        document.getElementById("a2").innerHTML = "Password: " + psswrd;
        document.getElementById("a3").innerHTML = "Full name: " + document.getElementById("hoTen").value;
        document.getElementById("a4").innerHTML = "Email: " + document.getElementById("email").value;
        document.getElementById("a5").innerHTML = "Phone number: " + document.getElementById("sdt").value;
        document.getElementById("a6").innerHTML = "Address: " + document.getElementById("number").value + " "
            + document.getElementById("street").value + ", " + document.getElementById("city").value + ", "
            + document.getElementById("states").value + " " + document.getElementById("postalcode").value + ", " + document.getElementById("country").value
        document.getElementById("a7").innerHTML = "Occupation: " + document.getElementById("nghe").value;
    }
    else {
        alert("Registration failed - Please enter the password again");
    }
}

function DangNhap() {
    var tenTK = document.getElementById("tentk").value;
    var mK = document.getElementById("mk").value;
    if (tenTK == "admin" && mK == "123456") {
        alert("Registration successful");
    }
    else {
        alert("Registration failed");
    }
}