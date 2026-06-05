import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    navigate("/");
  };

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" required />
        <input placeholder="Last Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Message" required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;