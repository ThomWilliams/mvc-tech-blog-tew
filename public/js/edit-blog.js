// corresponds with edit-blog handlebars
const editBlogFormEL = document.querySelector(".edit-blog-form");
const deleteBlogButton = document.querySelector(".btn-delete");
const editBlogButton = document.querySelector(".btn-edit");

// Edit / Update Blog
const editBlogFormHandler = async (event) => {
  event.preventDefault();

  // Get values inputted by user into edit-blog handlebars template
  const blog_title = document.getElementById("blog_title").value.trim();
  const blog_content = document.getElementById("blog_content").value.trim();
  const id = document.getElementById("blog-id").value;
  console.log(id);
  if (blog_title && blog_content) {
    // sends PUT request to the edit-blog API end-point
    const response = await fetch(`/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify({ blog_title, blog_content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // successful request sends user to dashboard page
      document.location.replace("/dashboard");
    } else {
      alert("Could not update blog");
    }
  }
};

//  delete blog post

const deleteButtonHandler = async (event) => {
    console.log("delete button clicked")
    const id = document.getElementById("blog-id").value;
  const response = await fetch(`/blog/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // successful request sends user to all-blogs page
    document.location.replace("/dashboard");
  } else {
    alert("Could not delete blog");
  }
};

editBlogFormEL.addEventListener("submit", editBlogFormHandler);
deleteBlogButton.addEventListener("click", deleteButtonHandler);
