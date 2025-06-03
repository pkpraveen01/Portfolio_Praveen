import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <img
          src="/Praveen.jpg"
          alt="Profile"
          className="about-profile-img"
        />
        <p className="about-text">
          I’m Praveen Kumar, a MERN stack developer with a passion for building beautiful, user-friendly web applications.
          I love coding, learning new technologies, and creating solutions that make a difference.
        </p>
      </div>
    </section>
  );
}
