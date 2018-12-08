import React from "react";
import "./Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Services = () => (
    <section className="section bg-grey-light p-t-60 p-b-20">
    <div className="container">
        <div className="p-t-15">
            <div className="heading-section heading-section-2">
                <h3>OUR SERVICES</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                    <FontAwesomeIcon icon="fas fa-calculator" />
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">Business Consulting</a>
                        </h3>
                        <p>Our professionals love working with small business. Bring all your questions to us. We
                            will find the perfect match.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                        <FontAwesomeIcon className="fa fa-money" />
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">Tax Preparation</a>
                        </h3>
                        <p>Qualified professionals ready to help you get all the money you deserve</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                        <FontAwesomeIcon className="fa fa-calculator" />
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">Taxes Planning</a>
                        </h3>
                        <p>Fusce at accumsan justo. Nulla lacus efficitur vel aliquam sed imperdiet auctor nisi
                            dictum ornare risus</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                        <FontAwesomeIcon className="fa fa-file" />
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">e-filing</a>
                        </h3>
                        <p>Donec malesuada urna porta tellus feugiat. Donec ultricies felis ipsum, at efficitur
                            tellus luctus eu.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                        <FontAwesomeIcon className="fa fa-calculator" />
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">Bookkeeping</a>
                        </h3>
                        <p>Donec malesuada urna porta tellus feugiat, ac tempor tortor finibus lacus quam rutrum
                            leo consectetur</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-5">
                    <div className="icon">
                        <FontAwesomeIcon className="fa fa-bank" href="#"></FontAwesomeIcon>
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <a href="services-v1.html">Refund Loans</a>
                        </h3>
                        <p>Donec malesuada urna porta tellus feugiat, ac tempor tortor ornare. At dui sit amet
                            massa ultricies ullamcorper</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

);

export default Services;