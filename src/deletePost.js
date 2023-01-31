const deletePost = (id, callback) => {
    fetch('http://localhost:8001/posts/' + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('Post Deleted!');
        if (typeof callback === "function") callback();
    })
}

export default deletePost;