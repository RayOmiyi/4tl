/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import user from "../../assets/user.png";
import phone from "../../assets/telephone.png";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      to_name: "Support Team", // Replace with recipient name if applicable
      message: formData.message,
      phone: formData.phone,
      topic: formData.topic,
    };

    emailjs
      .send(
        "service_njdxnx2", // Replace with your EmailJS Service ID
        "template_bmv8j4r", // Replace with your EmailJS Template ID
        templateParams,
        "8_xwgUHBSgLbD_-51" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setIsSending(false);
          setFormData({
            name: "",
            phone: "",
            topic: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Failed to send your message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="form-container">
      <p className="form-p">CONTACT US</p>
      <h1>WHAT'S THE 414?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group input-with-icon">
            <img src={user} alt="user icon" className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              required
            />
          </div>
          <div className="form-group input-with-icon">
            <img src={phone} alt="phone icon" className="input-icon" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="YOUR PHONE NUMBER"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              SELECT A TOPIC
            </option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="LEAVE A MESSAGE..."
            rows="4"
            required
          ></textarea>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? "Sending..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
};

export default Form;
