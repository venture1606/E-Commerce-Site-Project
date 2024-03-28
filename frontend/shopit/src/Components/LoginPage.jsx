import React from 'react'
import './AllStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const LoginPage = () => {
  return (
    <div className="container container-fluid">
            <div className="row wrapper"> 
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg">
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value=""
                            />
                        </div>
  
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value=""
                            />
                        </div>

                        <a href="#" className="float-right mt-5">Forgot Password?</a>
                        <br />
                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3 w-100"
                        >
                            LOGIN
                        </button>
                        <br/>
                        <a href="#" className="float-right mt-5">New User?</a>
                    </form>
                </div>
            </div>
    </div>
  )
}
