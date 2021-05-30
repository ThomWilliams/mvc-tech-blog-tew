// corresponds with edit-blog handlebars
const editBlogFormEL = document.querySelector('edit-blog-form');
const deleteBlogButton = document.querySelector('');

const editBlogFormHandler = async (event) => {
    event.preventDefault();

    // Get values inputted by user into edit-blog handlebars template
    const blogTitle = document.getElementById("blog-title-input").value.trim();
    const blogContent = document.getElementById("blog-content-input").value.trim();

    if (blogTitle && blogContent) {
        // sends PUT request to the edit-blog API end-point
        const response = await fetch(`/api/dashboard/${id}`, {

            method: 'PUT',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type:': 'application//json'},
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace('/all-blogs'); 
        } else {
            alert("Could not update blog");
        }
    }
}; 

// const delete



editBlogFormEL.addEventListener("submit", editBlogFormHandler);
deleteBlogButton.addEventListener("")