import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done.json";
import emailAnimation from "../../../public/animations/email.json"
const Contact = () => {
  //imprtant change this
  const [state, handleSubmit] = useForm("mwpppldn");    //rachid:  mnnqeqyn

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contat us
      </h1>
      <p className="sub-title">
        {/* something hee to display under the title of contact us */}
      </p>

      <div style={{justifyContent:"space-between",}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "submit"}
          </button>

          {state.succeeded && (
            <p className="flex sent" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie loop={false} style={{height:70}} animationData={doneAnimation} />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie className="contact-animation" style={{height:450}} animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
