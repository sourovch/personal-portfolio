import '../../styles/contact.css';
import Heading from '../heading';

function Contact() {
  return (
    <div className="page-fade contact-wrapper">
      <h1 className="big-heading">Contact</h1>
      <div className="contact-container">
        <div className="contact-info-wrapper">
          <div className="location contact-info">
            <i className="fa-solid fa-location-dot"></i>
            <p>Netrakona</p>
          </div>
          <div className="call contact-info">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+8801919171958">
              <p>+8801919171958</p>
            </a>
          </div>
          <div className="mail contact-info">
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:sourovch@gmail.com">
              <p>sourovch@gmail.com</p>
            </a>
          </div>
          <div className="check contact-info">
            <i className="fa-regular fa-square-check"></i>
            <p>Freelance Available</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="map-wrapper">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28955.768336905603!2d90.69076024335341!3d24.881909462204536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756f953729ddf8d%3A0xc9e39b96a2a4e053!2sNetrokona%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1671299893982!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Heading
            mainText={'How Can I '}
            coloredText={'Help you'}
            size={'mid'}
          />
          <form>
            <div className="contact-form">
              <div className="contact-half-form">
                <div className="contact-input-wrapper">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="fname"
                  />
                </div>
                <div className="contact-input-wrapper">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="email"
                  />
                </div>
                <div className="contact-input-wrapper">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="subject"
                  />
                </div>
              </div>
              <textarea
                placeholder="Message"
                className="message contact-full-form"
              ></textarea>
            </div>
            <div className="contact-submit">
              <input type="submit" value={'Send Message'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
