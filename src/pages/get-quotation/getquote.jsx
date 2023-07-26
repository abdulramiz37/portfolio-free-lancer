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
  const [budget, setBudget] = useState("");
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
    if (!name || !email || !message) {
      return;
    }

    // Prepare the form data
    const formData = {
      name,
      email,
      phone,
      budget,
      message,
    };

    // You can perform additional actions here, such as sending the form data to your backend

    // Clear the form fields and display success message
    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
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
                <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
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

                      <select style={{ textTransform: "none", width: "100%", marginTop: "26px" }}>
                        {/* Additional inline CSS for button and select */}
                        <option value="">Select Budget</option>
                        <option value="budget1">Budget 1</option>
                        <option value="budget2">Budget 2</option>
                        <option value="budget3">Budget 3</option>
                      </select>
                    </div>
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
                  <button type="submit" className="butn bord" style={{ textTransform: "none", width: "100%" }}> {/* Additional inline CSS for button and select */}
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
