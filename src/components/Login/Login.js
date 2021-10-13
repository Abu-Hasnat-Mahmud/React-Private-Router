import React from 'react';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const {googleSignin,gitHubSignIn}=useAuth();
    
    return (
        <div>
            <button onClick={googleSignin}>Signin With Google</button>
            <button onClick={gitHubSignIn}>Signin With GitHub</button>
        </div>
    );
};

export default Login;