"use client";

import React from "react";
import ProgressBar from "./Bar.component";

const ProcessSection = () => {
  const progress = [
    { bgcolor: "#f49867", completed: 60, text: "planning" },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#f05230", completed: 60 },
    { bgcolor: "#fecd35", completed: 60 },
    { bgcolor: "#ae67fa", completed: 30 },
    { bgcolor: "#ef6c00", completed: 60 },
  ];

  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="process__wrapper section">
      <div className="container">
        <div className="process__title">
          <h1>Our Expertise</h1>
          <h2>IT SOLUTIONS FOR YOUR BUSINESS</h2>
        </div>
        <div className="process__row">
          <div className="process__col-5">
            <div className="process__item">
              <h2>By the Numbers</h2>
              <h1>92%</h1>
              <h3>Retention Rate</h3>
              <p>
                The retention rate is the ratio of the number of times a patient
                has been exposed to the number of times a patient has been
                exposed to the number of times a patient has been exposed to the
                number of times.
              </p>
            </div>
            <a href="/">See How We Work</a>
          </div>
          <div className="process__col-5">
            <p>
              The retention rate is the ratio of the number of times a patient
              has been exposed to the number of times a patient has been exposed
              to the number of times a patient has been exposed to the number of
              times.
            </p>
            <div className="process__ghtp">
              {progress.map((item, idx) => (
                  <ProgressBar
                    key={idx}
                    bgcolor={item.bgcolor}
                    completed={completed}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
