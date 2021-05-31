// corresponds with edit-blog handlebars
const editBlogFormEL = document.querySelector('edit-blog-form');
const deleteBlogButton = document.querySelector('delete-btn');
const editBlogButton = document.querySelector('edit-btn');


// Edit / Update Blog 
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
            headers: { 'Content-Type:': 'application/json'},
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace('/api/dashboard'); 
        } else {
            alert("Could not update blog");
        }
    }
}; 

//  delete blog post

const deleteButtonHandler = async (event) => {
    if (event.target.hasAttributes('data-id' && deleteBlogButton)) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/dashboard/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // successful request sends user to all-blogs page
            document.location.replace('/api/dashboard'); 
        } else {
            alert("Could not delete blog");
        }
    }
}




editBlogFormEL.addEventListener(deleteBlogButton("submit"), editBlogFormHandler);
deleteBlogButton.addEventListener("")