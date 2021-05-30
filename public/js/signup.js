// corresponds with signup handlebars
const signupFormEL = document.querySelector('signup-form');

const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into signup handlebars template
    const username = document.getElementById("username-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();

    if (username && password) {
        // sends POST request to the signup API end-point
        const response = await fetch("/api/users", {

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


signupFormEL.addEventListener("submit", signupFormHandler);