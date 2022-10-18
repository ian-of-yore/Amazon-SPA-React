import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState } from 'react';

const Register = () => {
    const { createUser, signInGoogle } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        // console.log(email, password, confirmPassword)
        if (password === confirmPassword) {
            createUser(email, password)
                .then((result) => {
                    // const user = result.user;
                    setPasswordError('');
                    form.reset();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            setPasswordError("Password didn't match! Try Again");
        }
    }

    const handleSignInGoogle = () => {
        signInGoogle()
            .then((result) => console.log(result.user))
            .catch((error) => console.log(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title my-5'>Register Your Credentials</h2>
            <form onSubmit={handleFormSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                {passwordError}
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p className='mt-4 text-center w-10/12'>Already have an account?<button className='underline ml-1'><Link to='/login'>Login</Link></button></p>
            <div onClick={handleSignInGoogle} className=' flex items-center justify-center text-xl mt-12 text-black bg-white p-3 w-[415px] rounded-md border-2 hover:bg-amber-500 hover:text-white'>
                <FcGoogle className='mr-2'></FcGoogle>
                <button> Continue With Google</button>
            </div>
        </div >
    );
};

export default Register;