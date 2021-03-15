import "./index.scoped.sass";
import sendEmail from "./sendEmail";

function ContactSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_7qbf5zm",
        e.target,
        "user_wI1MtDUVRWTqeKdhb4pDH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container">
      <h1>some art here</h1>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <button value="Send" onClick={() => alert("Email was sent")}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
