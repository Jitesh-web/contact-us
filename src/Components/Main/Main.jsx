import React, { useState } from "react";
import "./main.css";
import Chat from "/images/chat.png";
import Call from "/images/call.png";
import Service from "/images/contact.svg";

const Main = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted Successfully ${JSON.stringify(data)}`);
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <main className="contactContainer">
        <h1 className="contactTitle">CONTACT US</h1>
        <p className="contactDesc">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="contactSection">
          <div className="btnSection">
            <button className="btnChat">
              <img src={Chat} alt="Chat" className="chatImg" />
              <span> VIA SUPPORT CHAT</span>
            </button>
            <button className="btnCall">
              <img src={Call} alt="Call" className="callImg" />
              <span>VIA CALL</span>
            </button>
          </div>
          <div className="formDesc">
            <img src={Chat} alt="emailCall" className="emailCall" />
            <span className="viaemailForm">VIA EMAIL FORM</span>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name1">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={data.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  onChange={handleChange}
                  value={data.message}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="serviceSection">
            <img src={Service} alt="service Image" className="serviceImg" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
