import React, { Fragment, useState, useEffect } from 'react';
import Nav from './Nav';
import ocean from '../dist/ocean-album.jpg'

const Top2020 = () => {
    const [items, setItems] = useState([]);
    const getUsers = async () => {
        const url = 'http://jsonplaceholder.typicode.com/users'
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setItems(data);
    }
    useEffect(() => {
        getUsers();
    }, [])


    return (
        <Fragment>
            <Nav statusLast={'activo'} />
            <div className="container separador">
                <div className="row d-flex justify-content-around">
                    {items.map(item => (
                        <div className="col-sm-12 col-md-6 col-lg-3" key={item.id}>
                            <div className="card mb-3">
                                <img className="card-img-top imgAlbum" src={ocean} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.username}</h4>
                                    <p className="card-text">{item.company.name}</p>
                                    <p className="card-text"><small class="text-muted">{item.phone}</small></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Fragment>

    )
}
export default Top2020;