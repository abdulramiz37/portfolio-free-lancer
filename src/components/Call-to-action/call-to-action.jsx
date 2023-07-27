import React from 'react';
import Split from '../Split';
import Link from 'next/link';

const CallToAction = ({ img }) => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Let’s Talk
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                  about your <br /> <b className="back-color">next project</b>.
                </h2>
                <p>BOOK YOUR FREE DEMO TODAY</p>
                <p>Book free demo and talk to our sales team and get free quote.</p>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href={`/contact/contact`}>
              <a className="butn bord curve wow fadeInUp"
               data-wow-delay=".5s"
               >
                <span>Get In Touch</span>
              </a>
            </Link>
            
      
          </div>
        </div>


        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
     
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
         
            
            <Link href={`/get-quotation/getquote`}>
              <a
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
             
              >
                <span>Get The Quote</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
