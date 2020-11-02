import React, { Fragment } from 'react';
import Nav from './Nav'

const Top2021 = () => {
    return (
        <Fragment>
            <Nav statusTop2021={'activo'}/>
            <div className="container separador">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                    <h1>Rank 2021</h1>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Top2021;