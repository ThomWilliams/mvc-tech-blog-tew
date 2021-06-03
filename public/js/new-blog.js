// corresponds with new-blog handlebars
const newBlogFormEL = document.querySelector('.new-blog-form');

const newBlogFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into new-blog handlebars template
    const blogTitle = document.getElementById("blog-title-input").value.trim();
    const blogContent = document.getElementById("blog-content-input").value.trim();

    if (blogTitle && blogContent) {
        // sends POST request to the new-blog API end-point
        const response = await fetch("/api/dashboard/new-blog", {

            method: 'POST',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace('/dashboard'); 
        } else {
            alert("Could not create blog");
        }
    }
}; 
newBlogFormEL.addEventListener("submit", newBlogFormHandler);