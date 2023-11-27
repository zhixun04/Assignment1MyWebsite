// JavaScript for form validation
function validateForm() { 
    var email = document.forms["loginForm"]["Email"].value;
    var password = document.forms["loginForm"]["Password"].value;

    if (email === "" && password === "") {
        alert("Please enter both email and password.");
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (password === "") {
        alert("Please enter your password.");
        return false;
    }    
    return true;
}

function checkUsernameLength() {
    var username = document.getElementById("email").value;
    var feedback = document.getElementById("usernameFeedback");
    if (username.length < 6) {
        feedback.innerText = "Username should be at least 6 characters long.";
    } else {
        feedback.innerText = "Username is long enough"; 
    }
}

function func() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === 'peyzhixun@gmail.com' && password === '12345') {
        alert("Success")
        window.location.assign("Home.html")
    } else {
        alert("Wrong entry")
    }
}


function func(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === 'peyzhixun@gmail.com' && password === '12345') {
        alert("Success")
        window.location.href = "Home.html"; // Correct way to set the href property
    } else {
        alert("Wrong entry")
    }
}
