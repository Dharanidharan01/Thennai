import React from "react";
import contactImage from "../../../assets/contactus.jpg";

const ContactUsKannada = () => {
  return (
    <div className="contactus-container">
      <header className="contactus-header">
        <h2>ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನಮಗೆ ಕಳುಹಿಸಿ</h2>
        <p>ಕீழಗಿನ ಫಾರ್ಮ್ ಅನ್ನು ಪೂರ್ತಿಗೊಳಿಸಿ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ನಮಗೆ ಕಳುಹಿಸಿ!</p>
      </header>
      <main className="contactus-content">
        <div className="contactus-image">
          <img
            src={contactImage}
            alt="ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ"
          />
        </div>
        <div className="google-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSevu8MPy16SQVpqwZg4p6ra5VhMmrIolf0yEq6avhpESZuqIw/viewform?embedded=true"
            className="form-iframe"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಫಾರ್ಮ್"
          >
            ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…
          </iframe>
        </div>
      </main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');

        .contactus-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 20px auto;
          padding: 20px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .contactus-header {
          text-align: center;
          margin-bottom: 20px;
          width: 100%;
        }

        .contactus-header h2 {
          font-size: 28px;
          color: #0090E1;
          margin: 0;
        }

        .contactus-header p {
          font-size: 16px;
          color: #666;
        }

        .contactus-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 15px;
          gap: 20px;
          width: 100%;
        }

        .contactus-image {
          flex: 0 0 25%;
        }

        .contactus-image img {
          width: 150%;
          height: auto;
          border-radius: 8px;
          margin-top: 15px;
        }

        .google-form {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-iframe {
          width: 700px;
          height: 700px;
        }

        /* Mobile-Responsive Media Queries */
        @media screen and (max-width: 768px) {
          .contactus-container {
            padding: 10px;
            margin: 10px;
          }

          .contactus-content {
            flex-direction: column;
            align-items: center;
          }

          .contactus-image {
            flex: none;
            width: 100%;
            margin-bottom: 20px;
          }

          .contactus-image img {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            display: block;
          }

          .google-form {
            width: 100%;
            overflow-x: hidden;
          }

          .form-iframe {
            width: 100%;
            max-width: 100vw;
            height: 800px;
          }

          .contactus-header h2 {
            font-size: 24px;
          }

          .contactus-header p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUsKannada;
