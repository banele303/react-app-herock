import React from "react";
import { Image, Button } from "react-bootstrap";
import Pic from "../images/img-c2.jpg";
import dev from "../images/img-c7.jpg";

import imag from "../images/img-c4.jpg";
import "./ServiceThree.css";

const ServiceThree = () => {
  return (
    <div className="services-container">
      <h3>Our Services</h3>
      <p>
        currently I work work at Dev solutions   part time work. We provide
        digital experience services to startups and small businesses looking for
        a partner of their digital media,websites, design & web development,
        lead generation and communications requirents. We work with you, not for
        you. Although we have a great resources
      </p>
      <div className="row">
        <div className=" col-md-4 col-sm-6 col-xm-12 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Web Developments</h5>
              <p2 className="card-text">
                BlecoX is dealing with building upto date standards of
                website ,Using React js is what makes our website more unique
                because of its routing system.We do build frond end and back end
                website.
              </p2>
              <div className="m-3 text-center">
                <Button variant="outline-secondary">For More</Button>{" "}
              </div>

              <Image className="img" src={imag} fluid />
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-sm-6 col-xm-12 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Web Design</h5>
              <p2 className="card-text">
                If you want your products to look amazing on internet we can do
                it for you by building colorful website with amazing animation
                and style using our best web design tools which are very popular
                and their great tools. You will like it
              </p2>
              <div className="m-4 text-center">
                <Button variant="outline-secondary">For More</Button>{" "}
              </div>
              <Image className="img" src={dev} fluid />
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-sm-6 col-xm-12 my-1 ">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">IT solutions</h5>
              <p2 className="card-text">
                BlecoX is  dealing with updating and installing new Computer
                technology tools,Upgrading windows to current version windows
                11, Connecting internet to your computers and print connection
                to your computers. if you have any problem related to computer u
                can contact us so than we can solve your problem fast
              </p2>
              <div className="m-4 text-center size-md">
                <Button variant="outline-secondary">For More</Button>{" "}
              </div>
              <Image className="img" src={Pic} fluid />
            </div>
          </div>
        </div>
      </div>
      <h3>What To Do</h3>
      <p>
        Thanks for visiting this page . If you want our help you can send us
        email we will get you on time.Why us we offer up to date service with
        amazing features and we like you to ask as many question as you can so
        that we build exactly what you want on time. have a great day
      </p>
    </div>
  );
};

export default ServiceThree;
