import React from "react";
import digital from "../../../public/assets/nat-1.avif";
import writing from "../../../public/assets/nat-3.png";
import web from "../../../public/assets/nat-5.png";
import services from "../../../public/assets/services.avif";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="header__banner section">
      <div className="container">
        <div className="header__banner-wrapper">
          <div className="header__banner-row">
            <div className="header__banner-col-6">
              <h1 className="header__banner-heading">Constantly Thinking Of</h1>
              <h2>New & Effective Ways</h2>
              <p>
                Equipped with data-informed digital marketing methods and a
                track record of success across various industries, our team of
                experts is dedicated to surpassing sales goals and boosting ROI.
                This relentless drive for results has solidified our reputation
                as one of Nigeria's top digital marketing agencies.
              </p>
              <a href="/" className="header__banner-btn">
                Explore Services
              </a>
            </div>
            <div className="header__banner-col-6">
              <Image
                width={180}
                height={300}
                className="header__banner-col-6-img"
                src={digital}
                alt="digital marketing"
              />
              <Image
                width={180}
                height={300}
                className="header__banner-col-6-img"
                src={writing}
                alt="writing"
              />
              <Image
                width={180}
                height={300}
                className="header__banner-col-6-img"
                src={web}
                alt="graphics"
              />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service__row">
            <div className="service__col-md-6">
              <Image
                src={services}
                alt="services"
                className="service__col-md-6-img"
              />
            </div>
            <div className="service__col-md-6">
              <h1>Company's Vision</h1>
              <h2>Unlock Your Route to Marketing Triumph with Us.</h2>
              <p>
                In today's fast-paced digital landscape, the appropriate
                marketing tactics can catapult your business to unprecedented
                growth. We blend human understanding, inventive thinking, and
                state-of-the-art technological resources to enhance your digital
                presence effectively. Our mission is to assist businesses in
                discovering, evaluating, implementing, and scaling their digital
                operations, driving transformative growth.
              </p>
              <p>
                our aim is to excel in both the traditional and digital
                marketing realms.
              </p>
              <ul>
                <li>Hyper-Targeted Outreach</li>
                <li>Maximize Online Exposure</li>
                <li>ROI-Driven Approach</li>
                <li>Customer Connect Strategy</li>
              </ul>
              <a href="/">See How We Work</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
