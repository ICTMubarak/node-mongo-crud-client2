import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Total users: {users.length}</h1>


            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name}, {user.email}
                    </p>)
                }
            </div>

        </div>
        
    );
};

export default Home;