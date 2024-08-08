import React from 'react';
import './ContactUs.css'; // Import the CSS file

function ContactUs({mode}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "thankyou.html";
  };

  return (
    <div className={`contactusbody ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <div className="backclass">
        <h2 className="cuhead">Get in Touch with Webcycle</h2>
        <br /><br />
        <p className="cupara">
          We are excited to connect with you! Whether you have questions, feedback, or ideas to share, we’d love to hear from you. At Webcycle, we believe in the power of community and collaboration to drive sustainable change.
        </p>
        <br /><br /><br />
        <div className="container">
          <div className="text">
            Contact us Form
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Email Address</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Contact Number</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div className="underline"></div>
                <label>Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <br /><br />
      </div>
    </div>
  );
}

export default ContactUs;
