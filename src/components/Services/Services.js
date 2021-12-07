import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import banner1 from '../../images/banner/banner1.jpg'
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div class="card bg-dark text-dark mb-5">
                <img src={banner1} class="card-img" alt="..." />
                <div class="card-img-overlay">

                </div>
            </div>
            <div className="container">
                <h1 class="card-title banner-txt mb-5"> Our <span className="text-success">Service</span> </h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;