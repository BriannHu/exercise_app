import React, { useState } from 'react'
import axios from 'axios'

export default function CreateUser() {
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const checkStatus = (status) => {
        if (status === 200) {
            alert('User sucessfully added.')
        } else {
            alert('The username has to be between 3-20 characters.')
        }
    }

    const submit = (e) => {
        e.preventDefault();
        const user = {username, age, gender, weight, height}
        axios.post('http://localhost:5000/users/add', user)
        .then(res => checkStatus(res.status));
        window.location = '/create'
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
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        required
                        className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <div>
                        <label>Gender:</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderChoice1"
                            name="gender"
                            value="male"
                            className="form-check-input"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="genderChoice1"> Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderChoice2"
                            name="gender"
                            value="female"
                            className="form-check-input"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="genderChoice2"> Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        required
                        className="form-control"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Height (cm):</label>
                    <input
                        type="number"
                        required
                        className="form-control"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}