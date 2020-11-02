import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className="navbar navbar-default bg-rose navbar-expand-lg fixed-top" >
            <div className="container">
                <div className="d flex flex-row-reverse">
                    <div className="navbar-translate">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>


                <div className="collapse navbar-collapse navbar-toggler">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link to="/" className={props.statusHome + ' nav-link'}  >Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/top2020" className={props.statusLast + ' nav-link'}  >Top-2020</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/top2021" className={props.statusTop2021 + ' nav-link'}  >Top-2021</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav