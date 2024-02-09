import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditTask() {
    const [added, setAdded] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/editTask/' + id, { added })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }
    return (
        <div className="bg-align">
            <div className="edit-items">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Task.....🥰</h1>
                    <div className='mb-2 searching'>
                        <input type='text' placeholder='Enter the task' className='form-control'
                            onChange={e => setAdded(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Edit...!</button>
                </form>
            </div>
        </div>
    );
}

export default EditTask;