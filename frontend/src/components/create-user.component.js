import React, { useState } from 'react'
import axios from 'axios'

export default function CreateUser() {
    const [username, setUsername] = useState('');

    const checkStatus = (status) => {
        if (status === 200) {
            alert('User sucessfully added.')
        } else {
            alert('The username has to be between 3-20 characters.')
        }
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', {username})
        .then(res => checkStatus(res.status));
        setUsername('')
    }

    

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={submit}>
            <div className="form-group"> 
                <label>Username: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
            </form>
        </div>
    )
}