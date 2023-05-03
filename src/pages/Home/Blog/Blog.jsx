import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Blog = () => {
    const {user } = useContext(AuthContext)
    return (
        <div>
            <h1>blog</h1>
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }

        </div>
    );
};

export default Blog;