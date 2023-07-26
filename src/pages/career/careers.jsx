import React, { useState, useEffect, useRef } from "react";
import { BsArrowUp, BsArrowDown, BsChatDots, BsPhone } from "react-icons/bs";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import Button from "react-bootstrap/Button";
import Link from 'next/link';

const Contact = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  const data = [
    {
      title: "Sr. Frontend Engineer",
      experience: "2+ Years",
      openings: 4,
      answer: "This is the answer for the Sr. Frontend Engineer position.",
    },
    {
      title: "Jr. Backend Developer",
      experience: "1-2 Years",
      openings: 2,
      answer: "This is the answer for the Jr. Backend Developer position.",
    },
    {
      title: "Sr. QA",
      experience: "2+ Years",
      openings: 2,
      answer: "This is the answer for the Sr. QA position.",
    },
    {
      title: "TL. Frontend Developer",
      experience: "3+ Years",
      openings: 2,
      answer: "This is the answer for the TL. Frontend Developer position.",
    },
    {
      title: "TL. Backend Developer",
      experience: "3+ Years",
      openings: 1,
      answer: "This is the answer for the TL. Backend Developer position.",
    },
  ];

  useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.querySelector("body").classList.remove("contact-page");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    spacer: {
      height: "100px",
    },
    mainContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 180px)",
    },
  };

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />

      <div style={styles.spacer}></div>

      <div style={styles.mainContent}>
        <table className="content-table">
          <tbody>
            {data.map((item, i) => (
              <React.Fragment key={i}>
                <tr className="item" onClick={() => toggle(i)}>
                  <td className="job-details">
                    <div className="job-title large">{item.title}</div>
                    <div className="detail-row">
                      <div className="detail-label moderate">Experience:</div>
                      <div className="detail-value moderate">{item.experience}</div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-label small">No of openings:</div>
                      <div className="detail-value small">{item.openings}</div>
                    </div>
                    <div className="toggle-button" onClick={() => toggle(i)}>
                      <div className={`arrow-circle ${selected === i ? "up" : "down"}`}>
                        {selected === i ? <BsArrowDown /> : <BsArrowUp />}
                      </div>
                    </div>
                  </td>
                </tr>
                {selected === i && (
                  <tr className="content">
                    <td className="job-details">
                      <div className="job-title">
                        <ul className="answer-list">
                          <li>{item.answer}</li>
                          <li>{item.answer}</li>
                        </ul>
                      </div>
                    </td>
                    <td className="job-details">
                      <div className="job-title">
                        <div className="logo-row">
                          <span className="logo-text">Apply Now</span>
                        </div>
                        <div className="logo-row">
                          <BsChatDots className="logo" />
                          <span className="logo-spacing" />
                          <span className="logo-text">abdulramiz007@gmail.com</span>
                        </div>
                        <div className="logo-row">
                          <BsPhone className="logo" />
                          <span className="logo-spacing" />
                          <span className="logo-text">8087181636</span>
                        </div>
                      </div>
                      <div className="toggle-button-apply">
                        <Link href={`../apply-for-podition/apply`}>
                          <a><Button variant="success" className="apply-button">
                            Apply Now
                          </Button></a>
                        </Link>
                      </div>
                    </td>
                    
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />

      <style jsx>{`
        .content-table {
          width: 80%;
          border-collapse: collapse;
        }

        .item {
          background: #111215;
          cursor: pointer;
        }

        .item:hover {
          background-color: #222;
        }

        .item td {
          color: white;
          padding: 10px 20px;
          position: relative;
        }

        .job-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .job-title {
          font-weight: bold;
        }

        .detail-row {
          display: flex;
          align-items: center;
          margin-top: 5px;
        }

        .detail-label {
          font-weight: bold;
          margin-right: 5px;
        }

        .toggle-button {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;
          height: 50%;
          position: absolute;
          top: 50%;
          right: 6%;
          transform: translate(50%, -50%);
        }

        .toggle-button-apply {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;
          height: 100%;
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translate(50%, -50%);
        }

        .arrow-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #555;
          color: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          transition: background-color 0.3s ease;
        }

        .arrow-circle.up {
          background-color: #777;
        }

        .arrow-circle.down {
          background-color: #555;
        }

        .apply-button {
          min-width: 100px;
        }

        .content {
          background: #222;
          color: white;
        }

        .content td {
          padding: 10px 20px;
        }

        .large {
          font-size: 19px; /* Updated text size for the large job title */
        }

        .moderate {
          font-size: 16px; /* Updated text size for the moderate experience */
        }

        .small,
        .logo-text {
          font-size: 12px; /* Updated text size for the small number of openings and logo text */
        }

        .answer-list {
          list-style-type: none; /* Remove default list style */
          padding: 0;
          margin: 0;
        }

        .answer-list li {
          margin-bottom: 8px;
          color: white;
          position: relative;
          padding-left: 20px; /* Add left padding for the bullet */
        }

        .answer-list li::before {
          content: ""; /* Add bullet content */
          position: absolute;
          top: 18px;
          left: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: white; /* Set bullet color to white */
        }

        .logo-row {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }

        .logo {
          margin-right: 5px;
          font-size: 18px;
        }

        .logo-spacing {
          width: 8px;
        }

        @media (max-width: 992px) {
          .content-table {
            width: 90%;
          }
        }

        @media (max-width: 768px) {
          .content-table {
            width: 100%;
          }

          .item td {
            padding: 10px;
          }

          .toggle-button,
          .toggle-button-apply {
            right: 12%;
          }

          .large {
            font-size: 16px; /* Updated text size for the large job title in mobile view */
          }

          .moderate,
          .answer-list {
            font-size: 14px; /* Updated text size for the moderate experience in mobile view */
          }

          .small,
          .logo-text {
            font-size: 10px; /* Updated text size for the small number of openings and logo text in mobile view */
          }

          .apply-button {
            min-width: 80px; /* Adjust the minimum width of the apply button in mobile view */
          }
        }
      `}</style>
    </DarkTheme>
  );
};

export default Contact;
