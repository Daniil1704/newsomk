import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'
import deletePost from './deletePost'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8001/posts/' + id);
    const navigate = useNavigate()

    const afterDelete = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Загрузка...</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div className='blog-body'>{blog.body}</div>
                    <p className="author">Дата публикации {blog.date}</p>
                    <button onClick={() => { deletePost(blog.id, afterDelete) }} className="btn-delete">Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;