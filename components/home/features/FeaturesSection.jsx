import Image from "next/image";
import React from "react";
import why from "../../../public/assets/Why_Choose_us.png";

const FeaturesSection = () => {
  return (
    <div className="features__wrapper section">
      <div className="container">
        <div className="features__row">
          <div className="features__col-md-3">
            <Image src={why} alt="why choose us" />
            <h1>Why Choose Us</h1>
            <h2>
              Prepared To Soar To Unprecedented Levels Of Brand Recognition And
              Sales Expansion?
            </h2>
            <p>
              Obtain digital marketing strategies focused on ROI to boost your
              brand visibility, amplify customer interaction, and eventually
              drive your sales upward.
            </p>
            <a href="/">See How We Work</a>
          </div>
          <div className="features__col-md-6">
            <div className="features__flex">
              <div className="features__flex-col-md-6">
                <h1>01</h1>
              </div>
              <div className="features__flex-col-md-12">
                <h2>
                  Tailored Strategies for Local and Global Markets
                </h2>
                <p>
                  Our expertise extends to handling brand strategies for B2B,
                  B2C, and D2C communication channels. With our personalized
                  marketing and nurturing plans, secure leads that are
                  ready-made for conversion. Our knowledge and skills in these
                  areas will provide your business with the necessary tools to
                  ensure a successful sales journey.
                </p>
              </div>
            </div>
            <div className="features__flex">
              <div className="features__flex-col-md-6">
                <h1>02</h1>
              </div>
              <div className="features__flex-col-md-12">
                <h2>Propelling Your Brand's Potential into Realities</h2>
                <p>
                  With our comprehensive knowledge of crafting successful brand
                  campaigns across various sectors, we can help you establish a
                  robust mix of eligible prospects, compelling content, and
                  targeted pitches aligned with customer preferences. Our
                  collective expertise allows us to tailor strategies that
                  resonate effectively with your desired audience.
                </p>
              </div>
            </div>
            <div className="features__flex">
              <div className="features__flex-col-md-6">
                <h1>03</h1>
              </div>
              <div className="features__flex-col-md-12">
                <h2>Blending Artistry with Proficiency</h2>
                <p>
                  We specialize in seamlessly blending the power of innovative
                  human ideas with digital techniques and approaches. By
                  employing bespoke digital nurturing paths, you can devise
                  robust demand-generation strategies in digital marketing that
                  truly drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
