import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContex)
    console.log(authInfo);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;