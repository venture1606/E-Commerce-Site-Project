import React, { Fragment } from 'react'
import '../AllStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Fragment>
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <img src={Logo} className='w-25 h-25'/>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                </div>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <button className="btn" id="login_btn">
                    <Link to="./login">Login</Link>
                </button>
                <span id="cart" className="m-3">
                    <Link to="./cart">Cart</Link>
                </span>
                <span className="ml-1" id="cart_count">2</span>
            </div>
        </nav>


    </Fragment>
  )
}
