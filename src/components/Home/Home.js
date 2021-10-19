import React from 'react';
import caro1 from '../../images/carosel/carosel (1).jpg';
import ab1 from '../../images/Aboutus/services (1).jpg'
import ab2 from '../../images/Aboutus/services (2).jpg'
import ab3 from '../../images/Aboutus/services (3).jpg'
import ser1 from '../../images/services/service (1).jpg'
import ser2 from '../../images/services/service (2).jpg'
import ser3 from '../../images/services/service (3).jpg'
import den1 from '../../images/dentist/dentist (1).jpg'
import den2 from '../../images/dentist/dentist (2).jpg'
import den3 from '../../images/dentist/dentist (3).jpg'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <div>
                {/* carosel  */}
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img src={caro1} className="d-block w-100 " alt="..." />
                            <div className="carousel-caption d-none d-md-block align-top">
                                <h1 className="" style={{ color: '#191919' }}>Dental <span className="text-success">Care</span> </h1>
                                <button type="button" className="btn btn-success btn-sm">Book an appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services  */}
            <div className="container">

                <h2 className="ser-txt">OUR DENTAL <span className="text-success">Services</span></h2>
                <p className="container col-md-8 mb-4">Donec varius sodales orci. Class aptent tasciti sociosqu ad litora torquent per nostra, per inceptos himenaeos. Aenean a arcu ullamcorper eros viverra suscipit.</p>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">

                    <div className="col">
                        <div className="card h-100">
                            <img src={ser1} className="card-img-top" alt="..." />
                            <div className="card-body ps-0">
                                <h5 className="card-title">Dental Implants</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div className="card-fo">
                                <button type="button" className="btn btn-outline-success">READ MORE <i className="fas fa-angle-double-right"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={ser2} alt="..." />
                            <div className="card-body ps-0">
                                <h5 className="card-title">Teeth Whitening</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div className="card-fo">
                                <button type="button" className="btn btn-outline-success">READ MORE <i className="fas fa-angle-double-right"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={ser3} alt="..." />
                            <div className="card-body ps-0">
                                <h5 className="card-title">Gum Treatment</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div className="card-fo">
                                <button type="button" className="btn btn-outline-success">READ MORE <i className="fas fa-angle-double-right"></i> </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* About us */}
            <div className="container container-mar d-flex justify-content-around">
                <div className="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <h2>OUR CLINIC <span className="text-success">HIGHLIGHTS</span></h2>
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
            <div className="container container-mar d-flex justify-content-around">
                <div className="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div className="row g-0 align-items-center  justify-content-center">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h4> Fixed Artificial Teeth</h4>
                                <p style={{ color: '#017733' }}>Donec varius sodales orci Class aptent per inceptos himenaeos end of Content.</p>

                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                                <button type="button" className="btn btn-outline-success">Read More <i className="fas fa-angle-double-right"></i></button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                className="img-fluid rounded-start"
                                src={ab1}
                                alt="new"
                            />
                        </div>
                    </div>
                    < hr />

                    <div className="row g-0 align-items-center  justify-content-center">
                        <div className="col-md-4">
                            <img
                                className="img-fluid rounded-start"
                                src={ab3}
                                alt="new"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h4> Full Mouth Rehabilitation</h4>
                                <p style={{ color: '#017733' }}>Donec varius sodales orci Class aptent per inceptos himenaeos end of Content.</p>

                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                                <button type="button" className="btn btn-outline-success">Read More <i className="fas fa-angle-double-right"></i></button>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="row g-0 align-items-center  justify-content-center">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h4> Latest Equipments</h4>
                                <p style={{ color: '#017733' }}>Donec varius sodales orci Class aptent per inceptos himenaeos end of Content.</p>

                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                                <button type="button" className="btn btn-outline-success">Read More <i className="fas fa-angle-double-right"></i></button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                className="img-fluid rounded-start"
                                src={ab2}
                                alt="new"
                            />
                        </div>
                    </div>

                </div>





            </div>

            {/*Doctors */}
            <div className="container">
                <h2 className="ser-txt pt-4">OUR <span className="text-success">DENTISTS</span></h2>
                <p className="container col-md-8 mb-4 text-center py-4">Donec varius sodales orci. Class aptent tasciti sociosqu ad litora torquent per nostra, per inceptos himenaeos. Aenean a arcu ullamcorper eros viverra suscipit.</p>
                <div className="container ">

                    <div className="row row-cols-1 row-cols-md-3 g-3">

                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img alt="img" src={den1} className="p-4" style={{ borderRadius: '50%' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Lara Christy</h5>
                                    <p className="card-text">Dentists</p>
                                    <button type="button" className="btn btn-outline-success btn-sm">Appoint Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img src={den2} className="p-4" alt="..." style={{ borderRadius: '50%' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Peter Joe</h5>
                                    <p className="card-text">Dentists</p>

                                    <button type="button" className="btn btn-outline-success btn-sm">Appoint Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img src={den3} className="p-4" alt="..." style={{ borderRadius: '50%' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Meria Juil</h5>
                                    <p className="card-text">Dentists</p>
                                    <button type="button" className="btn btn-outline-success btn-sm">Appoint Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Customare  */}
            <div className="container">

                <h2 className="ser-txt">Customer <span className="text-success">Feedback</span></h2>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className=" card-img-top img-round mb-3 p-5" alt="..." />
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="card-body">
                                    <p className="color2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <h5 className="card-title">John Adam</h5>
                                    <p className="card-text">Germany</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=32" className="card-img-top img-round mb-3 p-5" alt="..." />
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="card-body">
                                    <p className="color2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <h5 className="card-title">Mark Smith</h5>
                                    <p className="card-text">Netherland</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center card-shadow">
                                <img src="https://fedspendingtransparency.github.io/assets/img/user_personas/repurposer_mug.jpg" className="card-img-top img-round mb-3 p-5" alt="..." />
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="card-body">
                                    <p className="color2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <h5 className="card-title">Carl mark</h5>
                                    <p className="card-text">Sweden</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;