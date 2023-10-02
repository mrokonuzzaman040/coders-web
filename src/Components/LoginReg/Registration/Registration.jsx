import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Registration = () => {

    const { createUser } = useContext(AuthContex);
    // console.log(authInfo);

    const handelRegister = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        // Create New User
        createUser(email, password)
            .then(() => {
                console.log('User Created Successfully');
            })
            .catch(console.error())

    }

    return (
        <div className="text-white font-bold text-center text-5xl mt-20">
            <h2>Register Now</h2>

            <form onSubmit={handelRegister} className="mt-10 w-auto">
                <input required type="name" placeholder="Enter Your Name" className="block mx-auto  p-2 rounded-md" />
                <br />
                <input required type="email" placeholder="Enter Your Email" className="block mx-auto  p-2 rounded-md" />
                <br />
                <input required type="password" placeholder="Enter Your Password" className="block mx-auto  p-2 rounded-md" />
                <br />
                <button type="submit" className="block mx-auto p-2 rounded-md bg-blue-500 hover:bg-blue-700">Login</button>
            </form>
            <br />
            <div className="">
                <p>Already Have account? <Link to="/login" className="block mx-auto p-2 rounded-md bg-blue-500 hover:bg-blue-700">login now</Link></p>

            </div>
        </div>
    );
};

export default Registration;