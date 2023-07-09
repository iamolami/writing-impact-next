import services from "@/data/services";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="services__wrapper section">
      <div className="container">
        <div className="services__title">
          <h1>Our Services</h1>
          <h2>Outsmart Your Competition With Right Plan</h2>
          <p>
            Establishing a business involves complex and often lengthy
            procedures. From managing operations and finances to handling
            advertising, every aspect requires careful attention. If your goal
            is quick business growth and a substantial increase in online
            traffic, we're more than ready to assist. Offering comprehensive
            digital marketing services, we look forward to supporting you in the
            development and expansion of your business.
          </p>
        </div>
        <div className="services__row">
          {services.map((item, index) => (
            <div className="services__col-md-12" key={index}>
              <div>
                <a href="/" className="services__iconBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path d={item.path} fill="white"></path>
                    <path d={item.link} fill="white"></path>
                  </svg>
                </a>
              </div>
              <div className="services__content">
                <h2>{item.main}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services__btn">
            <a href="/">See How We Work</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
