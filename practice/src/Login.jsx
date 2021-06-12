import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Link} from 'react-router-dom';


const  Login=()=> {
    return (
        <>
        <div className="main_div">
            <h1 className="header">LOG IN</h1>
            <form>
                <div className="row">
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className="row">
                    <input type="Password" required />
                    <label>Password</label>
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
            </form>
            <div className="last">
                <h5>Don't have an account?
                
                <Link to='/singup'>
                    Sign Up
                </Link>
                </h5>
            </div>

        </div>




        </>
    )
}
export default Login;
