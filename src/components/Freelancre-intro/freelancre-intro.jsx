/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = () => {
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/hero.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h5 className="cd-headline clip">
                Hello, My name is Ayaz Momin Welcome to MacNET Software! We are tech enthusiasts, driven by innovation. Our cutting-edge solutions empower businesses and individuals, simplifying tasks and enhancing productivity. As the Founder & CEO, I invite you to join us on this exciting journey of endless possibilities.
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-400",
                      strings: [
                        " Thank you for choosing MacNET Software!",
                        
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>12</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>521</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projects Completed <br /> In 19 Countries
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="mailto:your@email.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>gethelp@macnet.co.in</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
