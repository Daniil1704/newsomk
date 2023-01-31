import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const clearForm = () => {
        setTitle('')
        setBody('')

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, date };
        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:8001/posts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New post was added!');
                setIsPending(false)
                clearForm()
                navigate('/')
            })
        }, 500)
    }

    return (
        <div className="create">
            <h2>Добавьте новую новость</h2>
            <form onSubmit={handleSubmit}>
                <label>Заголовок</label>
                <input type="text" required value={title} onChange={(e) => { setTitle(e.target.value) }} />

                <label>Новость</label>
                <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>

                <label>Дата</label>
                <input type="date" onChange={(e) => { setDate(e.target.value) }} />

                {isPending && <button disabled>Выклдодка новости</button>}
                {!isPending && <button>Выложить новость</button>}

            </form>
        </div>
    );
}

export default Create;