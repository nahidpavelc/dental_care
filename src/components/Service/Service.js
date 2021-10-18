import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';


const Service = ({ service }) => {
    // const {service} = props;
    const { name, price, description, img } = service;

    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>

    );
};

export default Service;