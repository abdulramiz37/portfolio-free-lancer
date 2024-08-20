import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro2 from "../../components/Intro2/intro2";
import Services from "../../components/Services/services";
// import Video2 from "../../components/Video2/video2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
// import Portfolio from "../../components/Portfolio/portfolio";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
// import Team2 from "../../components/Team2/team2";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
// import Team from "../../components/Team/team";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import Clients from "../../components/Clients/clients";
// import Intro5 from "../../components/Intro5/intro5";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro2 />
      <Services style="4item" />
      {/* <Portfolio grid={3} filterPosition="center" /> */}
    
      <FreelancreIntro />
  
      <Blogs2 />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
