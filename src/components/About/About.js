import React from 'react';
import banner1 from '../../images/banner/banner1.jpg'

const About = () => {
    return (
        <div>
            <div class="card bg-dark text-dark mb-5">
                <img src={banner1} class="card-img" alt="..." />
                <div class="card-img-overlay">
                </div>
            </div>
            <div className="container container-mar d-flex justify-content-around">
                <div className="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <h1>About <span className="text-success">US</span></h1>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                className="img-fluid rounded-start"
                                src="https://image.freepik.com/free-vector/dental-care-concept-illustration_52683-66519.jpg"
                                alt="new"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h4 style={{ color: '#3A3934' }}><i className="far fa-bookmark"></i> Easy booking</h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i className="fas fa-syringe"></i> Best doctors</h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i className="fas fa-hand-holding-medical"></i> Special Care</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;