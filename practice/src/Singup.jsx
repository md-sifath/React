import React from 'react';


function Sign(){
    return(
        <>
        <div className="main_div">
            <h1>SIGN UP</h1>
            <form>
                <div className="row_1">
                    <div className="col_1">
                        <input type="text" name="fname"/>
                        <label>First Name</label>
                    </div>
                    <div className="col_1">
                        <input type="text" name="lname"/>
                        <label>Lirst Name</label>
                    </div>
                </div>

                <div className="row">
                    <input type="email"/>
                    <label>Enter email</label>
                </div>
                
                <div className="row">
                    <input type="password"/>
                    <label>Password</label>
                </div>
                <div className="button">
                    <button>Create Account</button>
                </div>



            </form>





        </div>



        </>
    )
}

export default Sign;