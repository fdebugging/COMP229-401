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
        <p>
          Let’s connect! Whether it’s collaboration, opportunities, or just
          a conversation about tech, fitness, or healthcare systems.
        </p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
          <input placeholder="First Name" required />
          <input placeholder="Last Name" required />
          <input placeholder="Email" required />
          <input placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;