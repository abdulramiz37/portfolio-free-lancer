import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = useRef(null);

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const response = await fetch("https://weert.onrender.com/api/send-email", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    });

                    if (response.ok) {
                      messageRef.current.innerText =
                        "Your Message has been successfully sent. We will contact you soon.";
                    } else {
                      console.error("Error sending email:", response.statusText);
                    }

                    values.name = "";
                    values.email = "";
                    values.message = "";

                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 3000);
                  } catch (error) {
                    console.error("Error:", error);
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
