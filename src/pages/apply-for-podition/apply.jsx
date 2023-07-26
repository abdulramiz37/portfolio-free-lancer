import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactFromDate from "../../data/sections/form-info.json";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [positionAppliedFor, setPositionAppliedFor] = useState("");
  const [experience, setExperience] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here
    if (!name || !email || !positionAppliedFor || !experience || !message) {
      return;
    }

    // Prepare the form data
    const formData = {
      name,
      email,
      phone,
      positionAppliedFor,
      experience,
      message,
      resumeFile,
    };

    // You can perform additional actions here, such as sending the form data to your backend

    // Clear the form fields and display success message
    setName("");
    setEmail("");
    setPhone("");
    setPositionAppliedFor("");
    setExperience("");
    setResumeFile(null);
    setMessage("");
    setSuccessMessage("Your message has been successfully sent. We will contact you soon.");
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h2 className="fw-700 color-font mb-20">Thank You for Believing in Groovy</h2>
                <p>We highly respect your time and so, we are presenting simple forms with lesser but important fields to capture your thoughts. Your complete and transparent information will Help Us Help You Better.</p>

                {successMessage && <div className="success-message">{successMessage}</div>}
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="form-group">
                      <input
                        type="text"
                        id="form_name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="form_email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        id="form_phone"
                        name="phone"
                        placeholder="Phone/Mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        value={positionAppliedFor}
                        onChange={(e) => setPositionAppliedFor(e.target.value)}
                        style={{ textTransform: "none", width: "100%", marginTop: "26px" }}
                        required
                      >
                        <option value="">Select Position Applied For</option>
                        <option value="Sr. Frontend Engineer">Sr. Frontend Engineer</option>
                        <option value="Jr. Backend Developer">Jr. Backend Developer</option>
                        <option value="Sr. QA">Sr. QA</option>
                        <option value="TL. Frontend Developer">TL. Frontend Developer</option>
                        <option value="TL. Backend Developer">TL. Backend Developer</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        style={{ textTransform: "none", width: "100%", marginTop: "26px" }}
                        required
                      >
                        <option value="">Select Years of Experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Years">2 Years</option>
                        <option value="3 Years">3 Years</option>
                        <option value="4 Years">4 Years</option>
                        <option value="5 Years">5 Years</option>
                        <option value="6 Years">6 Years</option>
                        <option value="7 Years">7 Years</option>
                        <option value="8 Years">8 Years</option>
                        <option value="9 Years">9 Years</option>
                        <option value="10+ Years">10+ Years</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="form_resume_file" style={{ display: "block" }}>Upload Resume</label>
                      <input
                        type="file"
                        id="form_resume_file"
                        name="resume_file"
                        onChange={(e) => setResumeFile(e.target.files[0])}
                        style={{ width: "100%" }}
                      />
                    </div>
                    {/* {resumeFile && <p style={{ marginTop: "10px" }}>Number of Files Chosen: 1</p>} */}
                  </div>
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="butn bord" style={{ textTransform: "none", width: "100%" }}>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
                <h3 className="wow" data-splitting>
                  {ContactFromDate.title}
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">{ContactFromDate.email}</a>
                  </h5>
                  <h5>{ContactFromDate.phone}</h5>
                </div>
                <h3 className="wow" data-splitting>
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                    {ContactFromDate.location.first}
                    <br />
                    {ContactFromDate.location.second}
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer hideBGCOLOR />
    </DarkTheme>
  );
};

export default Contact;
