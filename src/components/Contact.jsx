import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-text">Feel free to reach out to me anytime!</p>
      <p className="contact-info">
        Email:{' '}
        <a href="mailto:py77750@gmail.com" className="contact-link">
          py77750@gmail.com
        </a>
      </p>
      <p className="contact-info">
        Phone:{' '}
        <a href="tel:+917260019502" className="contact-link">
          +91 7260019502
        </a>
      </p>
    </section>
  );
};

export default Contact;
