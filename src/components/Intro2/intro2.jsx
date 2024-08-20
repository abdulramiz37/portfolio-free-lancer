/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Hiii... </h6>
              </div>
              <h1 className="mb-10 fw-600"> Abdul Ramiz</h1>
              <p>
                A designer who specializes in crafting websites and applications with the primary objective of aiding your business in accomplishing its specific goals.
              </p>
              <Link
                href={`/about/about`}
              >
                <a className="butn bord curve mt-30">
                  <span>About Me</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/001.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2