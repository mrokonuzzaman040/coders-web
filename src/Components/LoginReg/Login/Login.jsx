import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContex);

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signInUser(email, password)
            .then(() => {
                console.log('User Login Successfully');
            })
            .catch(() => {
                console.log('Login Failed');
            })
    }

    return (
        <div className="text-white font-bold text-center text-5xl mt-20">
            <h2>Login Now</h2>

            <form onSubmit={handelLogin} className="mt-10 w-auto">
                <input type="email" placeholder="Enter Your Email" className="block mx-auto  p-2 rounded-md" />
                <br />
                <input type="password" placeholder="Enter Your Password" className="block mx-auto  p-2 rounded-md" />
                <br />
                <button type="submit" className="block mx-auto p-2 rounded-md bg-blue-500 hover:bg-blue-700">Login</button>
            </form>
            <br />
            <div className="">
                <p>New here? <Link to="/register" className="block mx-auto p-2 rounded-md bg-blue-500 hover:bg-blue-700">Create New Account</Link></p>

            </div>
        </div>
    );
};

export default Login;