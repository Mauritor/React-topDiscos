import React, { Fragment } from 'react';
import Nav from './Nav'

const Home = () => {
    return (
        <Fragment>
            <Nav statusHome={'activo'}/>
            <div className="container separador">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                    <h1>Home</h1>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Home;