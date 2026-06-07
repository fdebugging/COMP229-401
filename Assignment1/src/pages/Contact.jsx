import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>

      <div className="card">
        <h3>Get In Touch</h3>

        <p>
          I'd be happy to connect regarding software development opportunities,
          project collaborations, or professional networking.
        </p>

        <p>
          <strong>Name:</strong> Fatima Dabbous
        </p>

        <p>
          <strong>Email:</strong> fatima_dabbous@hotmail.com
        </p>

        <p>
          <strong>Phone:</strong> (647) 709-4894
        </p>

        <p>
          <strong>LinkedIn:</strong> linkedin.com/in/fatimadabbous
        </p>

        <p>
          <strong>GitHub:</strong> github.com/fdebugging
        </p>
      </div>

      <div className="card">
        <h3>Send Me a Message</h3>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "10px"
          }}
        >
          <input placeholder="First Name" required />
          <input placeholder="Last Name" required />
          <input placeholder="Contact Number" />
          <input type="email" placeholder="Email Address" required />
          <textarea
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;