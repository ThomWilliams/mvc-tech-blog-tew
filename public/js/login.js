// corresponds with login handlebars
const loginFormEL = document.querySelector('login-form');

const loginFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into login handlebars template
    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("password-login").value.trim();

    if (username && password) {
        // sends POST request to the login API end-point
        const response = await fetch("/api/users/login", {

            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type:': 'application//json'},
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace('/all-blogs'); 
        } else {
            alert(response.statusText);
        }
    }
}; 

loginFormEL.addEventListener("submit", loginFormHandler);