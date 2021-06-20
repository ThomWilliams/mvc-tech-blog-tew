// corresponds with new-blog handlebars
const newBlogFormEL = document.querySelector('.new-blog-form');

async function newBlogFormHandler(event) {
    event.preventDefault();

    // Get values inputted by user into new-blog handlebars template
    const blog_title = document.getElementById("blog_title").value.trim();
    const blog_content = document.getElementById("blog_content").value.trim();

    if (blog_title && blog_content) {
        // sends POST request to the new-blog API end-point
        const response = await fetch("/api/dashboard/", {

            method: "POST",
            body: JSON.stringify({ 
                blogTitle, 
                blogContent 
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace("/dashboard"); 
        } else {
            alert("Could not create blog");
        }
    }
}; 
newBlogFormEL.addEventListener("submit", newBlogFormHandler);