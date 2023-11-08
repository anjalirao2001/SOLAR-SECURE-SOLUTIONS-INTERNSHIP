function validate()
{
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var cpassword = document.getElementById("cpassword").value
    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkCpassword(password , cpassword)
}
function checkUsername(username)
{
    if(username.length > 7) 
    {
        document.getElementById("username").classList.add(`success`)
          document.getElementById("username").classList.replace(`error`, `success`)
          document.getElementById("username-error").innerText = ""
    }
    else
    {
            document.getElementById("username").classList.add("error")
            document.getElementById("username-error").innerText = 'Username must be 8 letters long'
    }
}

function checkEmail(email)
{
    if(email.length > 8 && email.includes("@gmail")) 
    {
        document.getElementById("email").classList.add(`success`)
          document.getElementById("email").classList.replace(`error`, `success`)
          document.getElementById("email-error").innerText = ""
    }
    else
    {
            document.getElementById("email").classList.add("error")
            document.getElementById("email-error").innerText = "Email must include @gmail , 8 letter long"
    }
}


function checkPassword(password)
{
    if(password.length > 7 && password.includes(".") )
    {
        document.getElementById("password").classList.add(`success`)
          document.getElementById("password").classList.replace(`error`, `success`)
          document.getElementById("password-error").innerText = ""
    }
    else
    {
            document.getElementById("password").classList.add("error")
            document.getElementById("password-error").innerText = 'Password must be 8 letters long and should include . '
    }
}


function checkCpassword(password , cpassword)
{
    if( password == cpassword && password != "")
    {
        document.getElementById("cpassword").classList.add(`success`)
          document.getElementById("cpassword").classList.replace(`error`, `success`)
          document.getElementById("cpassword-error").innerText = ""
    }
    else
    {
            document.getElementById("cpassword").classList.add("error")
            document.getElementById("cpassword-error").innerText = 'Password does not match '
    }
}