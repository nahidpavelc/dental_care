import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4>  {price}</h4>
                    <p className="card-text">{description.slice(0, 70)}</p>
                </div>
                <div className="card-footer">
                    
                    <Link to={`/booking/${id}`}>
                        <button type="button" className="btn btn-success">Booking Now
                            <i className="fas fa-plus m-1"></i>
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Service;