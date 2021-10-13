import React from 'react';
import useAuth from '../hooks/useAuth';


const Profile = () => {
    const {user}=useAuth();
    
    return (
        <div>
            <h1>This is profile</h1>
            <h3>Name: {user?.displayName}</h3>
        </div>
    );
};

export default Profile;