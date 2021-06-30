/** @format */

import React, { useEffect, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { db } from "./firebase";

function Contact() {
  const [emailSentStatus, setemailSentStatus] = useState(true);
  const [FetchedMails, setFetchedMails] = useState([]);
  const [Name, setName] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [Message, setMessage] = useState("");

  useEffect(() => {
    db.collection("PortfolioSite")
      .doc("1")
      .collection("Email")
      .onSnapshot((snapshot) =>
        setFetchedMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            fetchedMail: doc.data(),
          }))
        )
      );
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    if (FetchedMails) {
      const a = FetchedMails.filter((e) => e.fetchedMail.email === EMAIL);
      if (Name.length > 0 && EMAIL.length > 0 && Message.length > 0) {
        if (a.length === 0) {
          emailjs
            .sendForm(
              "service_gn02exh",
              "template_dhbz036",
              e.target,
              "user_fozTNyovNsFinK7Xx2TXx"
            )
            .then(
              () => {
                db.collection("PortfolioSite")
                  .doc("1")
                  .collection("Email")
                  .add({
                    email: EMAIL,
                    message: Message,
                  });
                alert("Email sent");
              },
              (error) => {
                alert(error.text);
              }
            );
          // var ff = document.getElementById("form");
          // ff.reset();
          setemailSentStatus(false);
        } else {
          alert("email used once to send message already.");
        }
      } else {
        alert("Field(s) empty");
      }
    }
  }

  return (
    <div className="contact">
      <p className="contactTitle">Contact at the given addresses</p>
      <div className="contactField">
        <p className="contactOptTitle">Github</p>
        <p
          className="contactOptRedirect"
          onClick={() => {
            window.open("https://github.com/DANISHPANDITA");
          }}>
          github/DanishPandita
        </p>
      </div>
      <div className="contactField">
        <p className="contactOptTitle">Instagram</p>
        <p
          className="contactOptRedirect"
          onClick={() => {
            window.open("https://instagram.com/pandita_danish");
          }}>
          instagram/DanishPandita
        </p>
      </div>
      <div className="contactField">
        <p className="contactOptTitle">Twitter</p>
        <p
          className="contactOptRedirect"
          onClick={() => {
            window.open("https://twitter.com/DanishPandita19");
          }}>
          twitter/DanishPandita
        </p>
      </div>
      <h2 className="sendMailTitle">or Send a mail</h2>
      {emailSentStatus ? (
        <form id="form" className="MailSendForm" onSubmit={sendEmail}>
          <label className="formLabel">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="formData"
            type="text"
            name="name"
          />
          <label className="formLabel">Email</label>
          <input
            onChange={(e) => setEMAIL(e.target.value)}
            className="formData"
            type="email"
            name="email"
          />
          <label className="formLabel">Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="formDataOne"
            name="message"
          />
          <input className="btnMailSubmit" type="submit" value="Send" />
        </form>
      ) : (
        <p className="sentMailLine">Mail Sent</p>
      )}
    </div>
  );
}

export default Contact;
