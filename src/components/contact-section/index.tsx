import "./index.scoped.sass";
import emailjs from "emailjs-com";

function ContactSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_w6bk0tf", "template_3pyf0pj", e.target).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className="container">
      <h1>some art here</h1>

      <form className="contact-form" onSubmit={sendEmail}>
        {/* <input type="hidden" name="contact_number" /> */}
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>
          Number <span className="optional">optional</span>
        </label>
        <input type="text" name="user_number" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactSection;
