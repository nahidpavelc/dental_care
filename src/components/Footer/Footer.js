import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">

            <div >
                <div className="card-group  mt-5">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className="card-title ">Our Address</h3>
                            <hr />
                            <p>DOHS Baridhara, Gulshan, Dhaka-1206, Bangladesh</p>
                        </div>
                        <div className="card-footer card-icon text-center">
                            <Link className="font-style m-2" to="#"><i class="fas fa-map-marked-alt"></i></Link>
                            <Link className="font-style m-2" to="#"><i class="fas fa-share-alt-square"></i></Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center" >
                            <h3>Connect With us</h3>
                            <hr />
                            <p>Donec varius sodales orci. Class aptent taciti sociosqu ad litora and torquent conubia taciti and End of Content.</p>
                        </div>
                        <div className="card-footer card-icon text-center">
                            <Link className="font-style m-2" to="#"><i class="fab fa-facebook"></i></Link>
                            <Link className="font-style m-2" to="#"><i class="fab fa-instagram"></i></Link>
                            <Link className="font-style m-2" to="#"><i class="fab fa-linkedin"></i></Link>
                            <Link className="font-style m-2" to="#"><i class="fab fa-twitter-square"></i></Link>
                            <Link className="font-style m-2" to="#"></Link>
                            <Link className="font-style m-2" to="#"></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Footer;