/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetails2 = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                    <div>
                    <h4 className="extra-title">
                    Pern Stake Vs Lamp Stake
                      </h4>
                      <h1>By TOM RANKIN</h1>
                      <h2>2 April 2020</h2>
    <h4>Introduction to LAMP:</h4>
    <p>
      The LAMP stack is a set of open-source software tools used to create web applications.
    </p>
    <p>
      A web application must have an operating system, a web server, a database, and a programming language in order to perform successfully. The acronym LAMP stands for the following:
    </p>
    <ul>
      <li>The letter L represents to Linux, which is an operating system.</li>
      <li>The letter A represents to Apache HTTP Web Server.</li>
      <li>The letters M represent to MySQL, MariaDB, and MongoDB, which are all database management systems.</li>
      <li>The letter P represents to PHP. PHP is a server based programming language.</li>
    </ul>

    <h2>Introduction to LAMP components:</h2>

    <h3>Linux Operating System:</h3>
    <p>
      Linux is a dependable and sturdy operating system that forms the foundation, or backbone, of the LAMP stack. The rest of the components in the stack sit on top of this reliable foundation. You can manage the other components of the stack effectively on different operating systems like Windows, macOS, and others. Nevertheless, Linux is more common for web development not only because it is open-source, but also due to its adaptability, configurability and user-friendly technology.
    </p>

    <h3>Apache Web Server:</h3>
    <p>
      The Apache HTTP Server is a web server software that helps power more than half of the websites on the internet. It runs on top of the Linux operating system, and its role is to process requests and transmit information using HTTP.
    </p>

    <h3>PHP (Programming Language):</h3>
    <p>
      PHP (Hypertext Preprocessor) is a programming language that allows a website and web application to run more efficiently by combining all the elements of the LAMP stack. It is commonly used for web development because it is a dynamically typed language, making it fast and easy to work with - which may be appealing if you are a beginner. PHP is so convenient to use because it can be embedded into HTML, enabling you to jump in and out of it as you wish.
    </p>

    <h3>MySQL/MariaDB/MongoDB:</h3>
    <p>
      MYSQL earned its reputation as an acclaimed database system as it supports SQL and relational tables, making it much easier to establish enterprise-level databases. Another relational database management system that can be part of the LAMP platform is MariaDB. Both are similar, and MariaDB claims to be completely compatible with MySQL, allowing users to transfer their database without complications. MongoDB is a cross-platform document-oriented and a non-relational database program. It is an open-source document database that stores data in key-value pairs.
    </p>

    <h3>Why LAMP?</h3>
    <p>
      The LAMP stack is made up of four components: all of which are free and open-source software (FOSS). The fact that you can easily tweak the stack and exchange the components with other open source applications to meet your specific needs is what makes it so appealing.
    </p>

    <h3>LAMP stack Alternatives:</h3>
    <p>
      Open source alternatives are:
    </p>
    <ul>
      <li>LEMP (Linux, NGINX, MySQL/MariaDB, PHP/Perl/Python)</li>
      <li>LAPP (Linux, Apache, PostgreSQL, PHP)</li>
      <li>LEAP (Linux, Eucalyptus, AppScale, Python)</li>
      <li>LLMP (Linux, Lighttpd, MySQL/MariaDB, PHP/Perl/Python)</li>
    </ul>
    <p>
      While non-open source alternatives include:
    </p>
    <ul>
      <li>WAWP (Windows, Apache, MySQL/MariaDB, PHP/Perl/Python)</li>
      <li>WIMP (Windows, Internet Information Services, MySQL/MariaDB, PHP/Perl/Python)</li>
      <li>MAMP (Mac OS x, Apache, MySQL/MariaDB, PHP/Perl/Python)</li>
    </ul>

    <h2>The PERN stack:</h2>
    <p>
      The PERN stack is a web development stack that includes the following technologies:
    </p>
    <ul>
      <li>P - PostgreSQL</li>
      <li>E - Express.js</li>
      <li>R - React</li>
      <li>N - Node.js</li>
    </ul>
    <p>
      Using these technologies, it is possible to create a full-stack web application with CRUD functions. PostgreSQL appears to be gaining popularity because it offers extensive support for NoSQL features, as well as transactional and standard compliance. It is written in the C programming language.
    </p>

    <h3>PostgreSQL:</h3>
    <p>
      PostgreSQL is a powerful, open-source object-relational database management system (ORDBMS). It has an emphasis on extensibility and standards compliance, utilizing and extending the SQL language. PostgreSQL is a transactional, ACID-compliant database that stores data in tabular format. It relies on constraints, triggers, roles, stored procedures, and views as major components.
    </p>

    <h3>Express.js:</h3>
    <p>
      Express.js is a web application framework that is free and open-source, making it a popular choice for developers who are looking to create web applications, especially APIs. One of the benefits of using Express is that it doesnt obscure any of the features that Node.js offers while still providing a thin layer of core web application functionalities.
    </p>

    <h3>React.js:</h3>
    <p>
      React is a JavaScript library that helps developers create user interfaces. React is simple, efficient, and easy to use - perfect for creating interactive views for each stage of your application. Because React efficiently updates and renders components, it is only suitable for single-page applications or mobile applications. React is managed by Facebook and a community of independent developers and businesses.
    </p>

    <h3>Node.js:</h3>
    <p>
      Node.js is a free, open-source JavaScript runtime that enables developers to create server-side and networking applications quickly and easily. Node.js is based on Chromes V8 JavaScript engine and uses an asynchronous event-driven architecture that makes it perfect for constructing fast and scalable network applications. Node.js can be run on a variety of platforms, making it a great choice for developers who want the flexibility to create cross-platform applications.
    </p>

    <h3>Why PERN?</h3>
    <p>
      The PERN stack is a group of technologies that work together to create full-stack web applications. PERN is an acronym for PostgreSQL, Express, React, and Node. This stack uses PostgreSQL as its database instead of mongo, which makes it a good choice for applications that need a robust database. PERN is also a good choice for storing hierarchical data.
    </p>
  </div>
  </div>
                      
                
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                        Compared to Apache, Nginx (pronounced “engine X”) is a relative newbie to the world of server-side technology. However, the development team took on the task of expanding upon the limitations of Apache systems.
                        </p>
                   
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form" id="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      alert(JSON.stringify(values, null, 2));
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-center">
                              <button
                                type="submit"
                                className={`nb butn ${
                                  theme
                                    ? theme === "light"
                                      ? "dark"
                                      : ""
                                    : "light"
                                } curve full-width`}
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails2;
