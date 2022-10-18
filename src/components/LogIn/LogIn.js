import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title my-5'>Verify Your Credentials</h2>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <p>Forgot Password? <button className='underline ml-1'>Reset</button></p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='mt-4 text-center w-10/12'>New here? Create a<button className='underline ml-1'><Link to='/register'>New Account</Link></button></p>
            
        </div>
    );
};

export default LogIn;