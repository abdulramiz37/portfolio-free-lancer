/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetails = ({ theme }) => {
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
                      <h4 className="extra-title">
                        Nginx vs Apache: Which Is the Best Web Server?
                      </h4>
                      <h1>By TOM RANKIN</h1>
                      <h2>2 April 2020</h2>
                      <p>
                        In other words, the people who created and manage WordPress believe that people should have access to a platform where they can publish the things that matter to them—in the way they choose to do it.
                      </p>
                      <p>
                        While there are lots of different types of server software, you’ll often whittle the contenders down to Nginx vs Apache. This is because both offer top performance for many different server configurations, and suit certain applications better than the other.
                      </p>
                      <p>
                        Even so, you’ll still want to consider which one of these makes more sense for your needs. There are a few different categories to look into, such as operating system (OS) support, security, documentation, and (of course) performance.
                      </p>
                      <h3>Introducing Nginx and Apache</h3>
                      <p>
                        Before we get into the deep details of each server type, let’s give you the rundown on both Nginx and Apache. Once we get to the next section, you’ll learn about some of the use cases of both, and where you might see them ‘in the wild’.
                      </p>
                      <h4>Nginx</h4>
                      <p>
                        Compared to Apache, Nginx (pronounced “engine X”) is a relative newbie to the world of server-side technology. However, the development team took on the task of expanding upon the limitations of Apache systems.
                      </p>
                      <p>
                        It’s an open-source solution that lots of users consider for its stability and scalability. This is (in part) down to its event-driven architecture – more of which later. In fact, part of the goal for the initial Nginx release was to be able to handle 10,000 connections at once. This is something that was necessary back in 2004, due to the rapidly-expanding web at the time.
                      </p>
                      <p>
                        On the whole, sysadmins and site owners like Nginx because it’s performant, works great with static files, and performs the functions of a load balancer and a ‘reverse proxy’. These are all relevant to uptime, speed, and security.
                      </p>
                      <h4>Apache</h4>
                      <p>
                        Apache is somewhat the ‘old man’ of web server technology. It’s almost as old as the web itself – from 1995 Apache has been the software at the core of thousands, if not millions, of servers.
                      </p>
                      <p>
                        For a long time, Apache has been a dominant technology among ‘sysadmins’. There are lots of reasons for this – some performance-related, and others force of habit. Regardless, Apache servers see lots of use where configurations matter.
                      </p>
                      <p>
                        You’ll find Apache as pre-installed software on all Linux distros, so it’s a go-to solution for that OS. However, while it uses a different architecture to Nginx, it still offers power, scalability, and fantastic documentation.
                      </p>
                      <p>
                        Lots of sysadmins also like the customizable nature of Apache, and how you can make a server your own through loading various modules.
                      </p>
                      <h3>The general use cases for Nginx vs Apache</h3>
                      <p>
                        It’s fair to say that Apache is a “jack of all trades” when it comes to serving websites. However, this is a mixed blessing. Yes, Apache servers can do almost everything Nginx can do, but it’s at the expense of less performant code. Age is a factor here.
                      </p>
                      <p>
                        Because Apache arrived at a time before we have some of the more advanced applications for web servers, the codebase couldn’t do what it needed to serve modern websites. While these issues aren’t necessarily a cause for concern now, a solution such as Nginx works with the modern web in mind.
                      </p>
                      <p>
                        As such, you’ll find Apache is fantastic as an easy-to-configure server for applications such as shared hosting. Its integrations also see it used as local development server software, as part of the Linux, Apache, MySQL, and PHP (LAMP) stack.
                      </p>
                      <p>
                        In contrast, Nginx has a more mature software base, with greater streamlining compared to Apache. It’s good where stability and security are key, fundamental elements. You’ll find that an Nginx server isn’t as configurable as other types, and this means you will access its core less.
                      </p>
                      <p>
                        What’s more, it’s not modular in the same way that Apache is, which makes it less suitable for a situation where you need to carry out server customization.
                      </p>
                      <h3>Nginx vs Apache: How popular each server type is</h3>
                      <p>
                        For a long time, server software was akin to a one-horse race. Apache ran as a dominant force for a number of years and still holds a huge market share. Because of this, you’ll find there are lots of integrations and support for Apache servers, along with top-notch documentation.
                      </p>
                      <p>
                        This serves as further reason to choose Apache and contributes to its continued use. However, Nginx is server software with a massive market share of its own. There is a slow rise in Nginx usage over time, to the point that it’s now the most dominant web server technology on the market, although not by much.
                      </p>
                      <p>
                        Looking ahead, we’d suggest that Apache will see less use over time because Nginx provides a lot of what sysadmins need in a web server. However, LiteSpeed Web Server and Cloudflare Server are on the horizon and come with a growing user base and heavy backing. In a few years, this comparison could compare Nginx to one of these younger upstarts.
                      </p>
                      <h3>Nginx vs Apache: A technical breakdown of the features and functionality</h3>
                      <p>
                        The next few sections will cover a number of technical aspects of Nginx vs Apache. While we can’t cover everything, we’ll give the major areas ample time. In any case, because these represent the core elements of both server types, you’ll have more than enough to go on when it comes to choosing the right software for you.
                      </p>
                      <h4>1. Connection and request handling</h4>
                      <p>
                        How a server handles connections is vital to know because this is its ‘core currency’. It’s arguable, but when people look to discuss the relative merits of Nginx vs Apache, connection handling plays a big part in the perceptions.
                      </p>
                      <p>
                        <strong>Nginx</strong>
                        <br />
                        Nginx is ‘asynchronous’ and ‘event-driven’, which means it can handle multiple requests at once and process them while there are available resources. It spawns ‘worker processes’ to handle the incoming connections, of which it expects thousands at a time. These are the ‘water carriers’ for the rest of the server.
                      </p>
                      <p>
                        For example, each worker process will listen out to process events and connections, and add them to a continuous loop. From there, the server can process each event and remove it when it finishes. The flow of an Nginx server provides inherent scalability, and the async, non-blocking architecture serves that too.
                      </p>
                      <p>
                        <strong>Apache</strong>
                        <br />
                        In contrast, Apache handles events one at a time through a number of Multi-Processing Modules (MPMs). A sysadmin will choose the connection architecture best suited to the task, of which there are a few.
                      </p>
                      <p>
                        The mpm_prefork module is a common one. This spawns child processes for each event, and will only process one connection at a time. If the number of processes is higher than the number of requests, you’d struggle to tell the difference between Nginx vs Apache with regard to performance.
                      </p>
                      <p>
                        However, this type of situation is rare, and an Apache server will see a higher number of requests than processes on many occasions. What’s more, this MPM doesn’t scale well, due to memory usage.
                      </p>
                      <p>
                        For those working with PHP, mpm_prefork is the only safe way to work with the mod_php interpreter module. Despite the drawbacks, this will be the MPM a WordPress developer will choose if they have to deploy to an Apache server.
                      </p>
                      <p>
                        You will also see mpm_worker and mpm_event modules too. These perform a similar operation and scale better due to the way they can spawn multiple processes per collection of threads.
                      </p>
                      <p>
                        This batch of MPMs shows how flexible Apache can be, despite the drawbacks for performance in some cases.
                      </p>
                      <h4>Request handling for static vs dynamic content</h4>
                      <p>
                        Before we move on, we should mention static versus dynamic content for each server software. You’ll read that Nginx can’t process dynamic content, which might give you cause for concern. In fact, Nginx won’t process this type of content in a native way. Instead, it will send it out to an external processor (such as a cache), then wait for it to return before it moves the content on.
                      </p>
                      <p>
                        For development, a sysadmin will set up a solution such as Memcached for this. There are negatives to this approach, namely on performance. However, the benefits to the performance overheads for each portion of the chain negates this. Nginx doesn’t have to worry about processing these requests, so it can concentrate on its areas of responsibility with greater efficiency.
                      </p>
                      <p>
                        Apache’s MPM system lets it process both static and dynamic content without the need for other modules. For dynamic content, Apache embeds a language processor into each worker. It’s a simple approach that works well. You can also swap out modules if you need to make a change.
                      </p>
                      <h4>2. Configuring the server</h4>
                      <p>
                        One of the more apparent differences between Nginx vs Apache is how you configure each server. Nginx uses a centralized approach, which means a user has no way to configure a server outside of one main file. While this seems like a negative, there are lots of advantages:
                      </p>
                      <ul>
                        <li>The server administrator is responsible for global security, which tightens up access to the server as a whole.</li>
                        <li>A centralized server has greater performance than other types. This is because Nginx won’t need to handle requests to check for configuration files in each directory.</li>
                        <li>There’s a knock-on effect here, as there won’t be any overrides for the server from multiple areas, further keeping request times down.</li>
                      </ul>
                      <p>
                        One way that a layperson will know they use an Apache server is the presence of .htaccess files. These are configuration files that you can add almost anywhere on your server. Apache will check each element of a path for a .htaccess file when a request is made.
                      </p>
                      <p>
                        This is fantastic for users who want to personalize their portion of server but could spell disaster if one of the directives causes performance or security issues. This decentralized approach is one of the reasons you’ll see Apache used on shared hosting. It’s also a reason why a content management system (CMS) such as WordPress offers good performance on Apache servers.
                      </p>
                      <h4>3. Request interpretation</h4>
                      <p>
                        One major difference of Nginx vs Apache that won’t seem apparent is how it interprets requests. In a nutshell:
                      </p>
                      <p>
                        <strong>Nginx</strong>
                        <br />
                        Nginx interprets and maps requests using a Uniform Resource Identifier (URI) for each component.
                      </p>
                      <p>
                        <strong>Apache</strong>
                        <br />
                        Apache can also use URIs to interpret requests, but it’s more common to see a file-based path structure.
                      </p>
                      <p>
                        Because Apache is a web server first and foremost, it will use <code>&lt;Location&gt;</code>, <code>&lt;Directory&gt;</code>, or <code>&lt;Files&gt;</code> blocks to define resources. The key concept here is that everything Apache ‘sees’ is related to the web server, so there is no ambiguity within the resource path. Think of a document tree, and this is how Apache ‘visualizes’ the server filesystem.
                      </p>
                      <p>
                        In contrast, Nginx has lots of use cases, such as a load balancer, proxy server, and a web server. Because of this, requests need to come as a URI for Nginx to process them. For example, Nginx uses <code>server</code> and <code>location</code> blocks: the former interprets the requested host, and the latter matches the URI portions afterward. The whole request becomes a URI.
                      </p>
                      <p>
                        On the whole, a URI is more flexible for Nginx, because it can adapt to whatever function it carries out. Even so, Apache’s system works, given that it only has to fulfill the role as a web server.
                      </p>
                      <h3>Nginx vs Apache: Which one you should choose for your server in 2022</h3>
                      <p>
                        The catch-all answer to, Which server software should I choose? is simple: It’s whichever one your hosting provider offers. In lots of cases, you won’t get a choice. We notice that lots of web hosts follow the same pattern you should match if you want to decide between Nginx vs Apache:
                      </p>
                      <ul>
                        <li>If you want to run a server that needs constant configuration, or you want to give users a configuration choice, Apache will fit the bill.</li>
                        <li>However, if you want to provide super performance, rock-solid security, and want to handle configurations rather than your users, Nginx is the way forward.</li>
                      </ul>
                      <p>
                        When it comes to performance, Apache can take up more memory because of its inherent architecture. Nginx is going to be better in high-traffic situations, especially if it has to handle lots of static content.
                      </p>
                      <p>
                        Therefore, if you rely on caching to store and serve content, Nginx could be the best option. However, remember that Nginx can’t serve dynamic content, so you’ll take more of a performance hit depending on the efficiency of the proxy your server uses.
                      </p>
                      <h3>Conclusion</h3>
                      <p>
                        There are lots of areas of WordPress (and running a website) that offer an almost overwhelming number of choices. This is the nature of the beast. However, it doesn’t help when you need to make your site live quickly.
                      </p>
                      <p>
                        Your choice of server type is one crucial and frontline decision that you’ll want to take extra care over. Nginx vs Apache is a common comparison because both offer benefits in certain situations.
                      </p>
                      <p>
                        Our opinion is that Nginx can cover the most bases with greater performance, which makes it the better option for most WordPress users. This is why many of the popular performance-focused WordPress hosts have moved towards an all-Nginx server stack, including Kinsta and Flywheel.
                      </p>
                      <p>
                        Regardless, you’re safe to use whatever your host offers if you don’t get that choice and most WordPress sites will be totally fine with either web server.
                      </p>
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
                                className={`nb butn ${theme
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

export default BlogDetails;
