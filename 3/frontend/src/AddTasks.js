import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTasks() {
    const [added, setAdded] = useState('')
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/addTask', { added })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }
    return (
        <div className="bg-align">
            <div className="edit-items">
                <form onSubmit={handleSubmit}>
                    <h1>Add Task.....🥰</h1>
                    <div className='mb-2  searching'>
                        <input type='text' placeholder='Enter the task' className='form-control'
                            onChange={e => setAdded(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Add...!</button>
                </form>
            </div>
        </div>
    );
}

export default AddTasks;