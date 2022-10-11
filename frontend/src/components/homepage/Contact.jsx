import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hxb4o6q",
        "template_7t6t5eb",
        form.current,
        "2HyzU6HWOohEdmtXG"
      )
      .then((result) => {
        console.log(result.text);
        alert("message sent successfully");
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <header className="event-sec">
        <center>
          <div className="e-title">Contact Us</div>
          <div className="e-sub-title">
            If you phase any difficulty during whole process
          </div>
          <div className="e-sub-title">Just fill free to contact us</div>
        </center>
      </header>
      <section className="contact-us">
        <div className="roww">
          <div className="con-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.852595988792!2d70.74104731489055!3d22.245670885351977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0bae890265%3A0x791c3a55d1ba2885!2sGovernment%20Engineering%20College%2C%20Rajkot!5e0!3m2!1sen!2sin!4v1664467535769!5m2!1sen!2sin"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="map"
            />
          </div>
          <div className="con-col">
            <form action="form-handler.php" ref={form} method="post">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                required
              />
              <textarea
                rows={10}
                name="message"
                placeholder="message"
                required
                defaultValue={""}
              />
              <button onClick={sendmail} className="btns">
                Send{" "}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
