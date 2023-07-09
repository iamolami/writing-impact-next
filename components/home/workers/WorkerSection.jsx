import Image from "next/image";
import React from "react";
import workers from "@/data/workers";

const WorkerSection = () => {
  return (
    <div className="worker__wrapper section">
      <div className="container">
        <div className="worker__title">
          <h2>Your Content Marketing Firm of Industry Experts</h2>
        </div>
        <div className="worker__row">
          {workers.map((item, idx) => (
            <div className="worker__col-1" key={idx}>
              <div className="worker__img">
                <Image
                  width={500}
                  height={500}
                  src={item.imageURL}
                  className="worker__img-img"
                  alt="worker"
                />
              </div>
              <div className="worker__content">
                <h2>{item.name}</h2>
                <p>{item.position}</p>
                <div className="worker__social">
                  <a
                    href="https://www.linkedin.com/in/john-doe-33333333/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      style={{ color: "rgb(13, 15, 74)" }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        fill="#0D0F4A"
                      ></path>{" "}
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/john-doe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fill="#0D0F4A"
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />{" "}
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/john_doe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      style={{ color: "rgb(13, 15, 74)" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle cx="128" cy="128" r="32"></circle>
                      <path
                        d="M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"
                        fill="#0D0F4A"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerSection;
