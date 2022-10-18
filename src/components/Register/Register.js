import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

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
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p className='mt-4 text-center w-10/12'>Already have an account?<button className='underline ml-1'><Link to='/login'>Login</Link></button></p>
            <div className=' flex items-center justify-center text-xl mt-12 text-black bg-white p-3 w-[415px] rounded-md border-2 hover:bg-amber-500 hover:text-white'>
                <FcGoogle className='mr-2'></FcGoogle>
                <button> Continue With Google</button>
            </div>
        </div >
    );
};

export default Register;