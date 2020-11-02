import React, { Fragment } from 'react';
import Nav from './Nav'

const Top2020 = () => {
    return (
        <Fragment>
            <Nav statusLast={'activo'} />
            <div className="container separador">
                <div className="row">
                    <div className="col-sm-12 col-md-4 ">
                        <div className="card">
                            <div className="card-header card-header-icon card-header-rose">
                                <div className="card-icon">
                                    <i className="material-icons">language</i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Here is the Icon</h4>
                                 The place is close to Barceloneta Beach and bus stop just...
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="card-header card-header-icon card-header-rose">
                                <div className="card-icon">
                                    <i className="material-icons">language</i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Here is the Icon</h4>
                                 The place is close to Barceloneta Beach and bus stop just...
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <div className="card-header card-header-icon card-header-rose">
                                <div className="card-icon">
                                    <i className="material-icons">language</i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Here is the Icon</h4>
                                 The place is close to Barceloneta Beach and bus stop just...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Top2020;