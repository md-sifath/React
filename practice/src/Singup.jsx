import React from 'react';
import { Link } from 'react-router-dom';

const  Sign= ()=>{
    return(
        <>
        <div className="main_div">
            <h1>SIGN UP</h1>
            <form>
                <div className="row_1">
                    <div className="col_1">
                        <input type="text" name="fname" required/>
                        <label>First Name</label>
                    </div>
                    <div className="col_2">
                        <input type="text" name="lname" required/>
                        <label>Last Name</label>
                    </div>
                </div>

                <div className="row">
                    <input type="email" required/>
                    <label>Enter email</label>
                </div>
                
                <div className="row">
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="check_box">
                    <input type="checkbox"/>
                    <label>I agree to all term & condition</label>
                </div>
                <div className="button">
                    <button>Create Account</button>
                </div>
                <p>
                    Already have an account? 
                    <Link to=".\Login.jsx">
                            Log in
                    </Link>
                </p>
            </form>
        </div>
        </>
    )
}

export default Sign;