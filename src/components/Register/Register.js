import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title my-5'>Register Your Credentials</h2>
            <form >
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
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='mt-4 text-center w-10/12'>Already have an account?<button className='underline ml-1'><Link to='/login'>Log In</Link></button></p>
            <p className='text-error'></p>
        </div>
    );
};

export default Register;