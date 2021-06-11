import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function Log() {
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
                <h5>Don't have an account?Sign Up</h5>
            </div>

        </div>




        </>
    )
}
export default Log;
