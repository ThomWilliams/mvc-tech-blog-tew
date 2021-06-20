// corresponds with signup handlebars
const commentFormEL = document.querySelector('.comment-form');

const commentFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into signup handlebars template
    const commentContent = document.getElementById("comment_content").value.trim();

    if (commentContent) {
        // sends POST request to the signup API end-point
        const response = await fetch("/api/comments", {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            // successful request sends user to homepage
            document.location.replace('/'); 
        } else {
            alert(response.statusText);
        }
    }
}; 

commentFormEL.addEventListener("submit", commentFormHandler);