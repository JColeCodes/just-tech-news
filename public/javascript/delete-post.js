async function deleteFormHandler(event) {
    event.preventDefault();

    const page_url = document.location.href.split('/');
    const id = page_url[page_url.length -1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);