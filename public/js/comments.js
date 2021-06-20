// corresponds with signup handlebars
const commentFormEL = document.querySelector('.comment-form');

const commentFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into signup handlebars template
    const comment_content = document.getElementById("comment_content").value.trim();
    const blog_id = 1
    if (comment_content && blog_id) {
        // sends POST request to the signup API end-point
        const response = await fetch("/api/comments", {
            method: 'POST',
            body: JSON.stringify({ comment_content, blog_id }),
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