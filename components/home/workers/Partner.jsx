import Image from "next/image";
import React from "react";

import mc from '../../../public/assets/mcdonalds-logo.png';
import basf from '../../../public/assets/BASF.png';
import ge from '../../../public/assets/ge-logo.png';
import hp from '../../../public/assets/HP.png';
import homeDepot from '../../../public/assets/home-depot-logo.png';
import health from '../../../public/assets/cvs-health-logo.png';
import lowe from '../../../public/assets/lowe_s.png';
import ikea from '../../../public/assets/ikea-logo.png';
import philips from '../../../public/assets/philips.png';
import starbucks from '../../../public/assets/starbucks-logo.png';
import wellsFargo from '../../../public/assets/wells-fargo-logo.png';
import zaraLogo from '../../../public/assets/zara-logo.png';
import espn from '../../../public/assets/espn-logo.png';
import lego from '../../../public/assets/lego.png';
import nivea from '../../../public/assets/nivea.png';

const Partner = () => {
    const images = [
        {name: "mcdonals", imageUrl: mc},
        {name: "basf", imageUrl: basf},
        {name: "ge", imageUrl: ge},
        {name: "hp", imageUrl: hp},
        {name: "home-depot", imageUrl: homeDepot},
        {name: "health", imageUrl:health},
        {name: "lowe", imageUrl: lowe},
        {name: "ikea", imageUrl: ikea},
        {name: "philips", imageUrl: philips},
        {name: "starbucks", imageUrl: starbucks},
        {name: "wellsFargo", imageUrl: wellsFargo},
        {name: "zaralogo", imageUrl: zaraLogo},
        {name: "espn", imageUrl: espn},
        {name: "lego", imageUrl: lego},
        {name: "nivea", imageUrl: nivea}
        ]
  return (
    <div className="partner">
      <div className="partner__wrapper section">
        <div className="container">
          <div className="partner__title">
            <h2>
              Trusted By Over 6000 Companies With Over 12 Years In Business
            </h2>
          </div>
          <div className="partner__row">
            <div className="partner__col-1">
              <div className="process__item">
                <h1>6000+</h1>
                <h3>Brands already onboard</h3>
              </div>
            </div>
            <div className="partner__col-1">
                <div className="partner__flex">
                    {images.map((item) => (
                        <Image src={item.imageUrl} className="partner__logo" width={50} height={50} alt={item.name} />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
