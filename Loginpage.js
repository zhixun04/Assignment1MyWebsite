function func(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == 'peyzhixun@gmail.com' && password == 'Badminton2023')
    {
        alert("Success")
        window.location.assign("Home.html")
    }
   else
   {
        alert("Wrong entry")
   }
}

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
    return false;
}

function checkUsernameLength()
{
    var username = document.getElementById("email").value;
    var feedback = document.getElementById("usernameFeedback");
    if (username.length < 6)
    {
        feedback.innerText = "Username should be at least 6 characters.";
    }
    else
    {
        feedback.innerText = "Username is long enough.";
    }
}

function validateForm() { 
    var email = document.forms["loginForm"]["Email"].value;
    var password = document.forms["loginForm"]["Password"].value;
    var passwordFeedback = document.getElementById("passwordFeedback");

    if (email === "" && password === "") {
        alert("Please enter both email and password.");
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (password === "") {
        alert("Please enter your password.");
        return false;
    } else {
        if (!password.match(/[0-9]/)) {
            // Password does not contain at least one number
            passwordFeedback.textContent = "Password must contain at least one number.";
            return false;
            
        }
        if (!password.match(/[A-Za-z]/)) {
            // Password does not contain at least one letter
            passwordFeedback.textContent = "Password must contain at least one letter.";
            return false;
        }
        // Clear the feedback when password is valid
        passwordFeedback.textContent = "Password is strong.";
        return false;
    }
}


