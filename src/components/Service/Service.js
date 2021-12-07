import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    // const {service} = props;
    const { id,  img } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <Link to={`/booking/${id}`}>
                        <button type="button" className="btn btn-success">
                            Booking Now
                            <i className="fas fa-plus m-1"></i>
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Service;