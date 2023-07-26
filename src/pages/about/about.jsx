
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import Team from "../../components/Team/team";
import MinimalArea from "../../components/Minimal-Area/minimal-area";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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

  return (
    <DarkTheme>
    <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
    <PagesHeader />
    <AboutIntro />
    <Services style="4item" />
    {/* <VideoWithTestimonials /> */}
    {/* <SkillsCircle from="aboutPage" /> */}
    <Team />
    <MinimalArea />
    <Clients theme="dark" />
    <CallToAction />
    <Footer />
  </DarkTheme>
  );
};

export default Contact;