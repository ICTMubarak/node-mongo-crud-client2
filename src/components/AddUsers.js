import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const AddUsers = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);
    }

    const handelInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        //console.log(value, field);
        const newUser = {...user}
        newUser[field] = value; 
        setUser(newUser); 
        console.log(newUser);
    }


    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handelInputBlur} type="text" name='name' placeholder='Name' required/>
                <br />
                <input onBlur={handelInputBlur} type="text" name='address' placeholder='Address' required/>
                <br />
                <input onBlur={handelInputBlur} type="email" name="email" id="" placeholder='Email' required />
                <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUsers;