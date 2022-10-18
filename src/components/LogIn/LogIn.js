import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './LogIn.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const LogIn = () => {
    const { logInUser, signInGoogle } = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then((result) => {
                // console.log(result.user)
                form.reset();
            })
            .catch((error) => console.log(error))
    }

    const handleSignInGoogle = () => {
        signInGoogle()
            .then((result) => console.log(result.user))
            .catch((error) => console.log(error))
    }


    return (
        <div className='form-container'>
            <h2 className='form-title my-5'>Verify Your Credentials</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <p>Forgot Password? <button className='underline ml-1 mb-5'>Reset</button></p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='mt-4 text-center w-10/12'>New here? Create a<button className='underline ml-1'><Link to='/register'>New Account</Link></button></p>
            <div onClick={handleSignInGoogle} className=' flex items-center justify-center text-xl mt-12 text-black bg-white p-3 w-[415px] rounded-md border-2 hover:bg-amber-500 hover:text-white'>
                <FcGoogle className='mr-2'></FcGoogle>
                <button>Log In With Google</button>
            </div>
        </div>
    );
};

export default LogIn;