import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {/* Gym Application */}
        <div className="project-card">
          <h3 className="project-title">Gym Website</h3>
          <p className="project-description">
            A full-stack gym platform built using the MERN stack. It features user registration, login, contact form, BMI calculator, pricing plans, Stripe payments, and responsive UI.
          </p>
          <div className="project-links">
            <a
              href="https://gym-app-6-8cxv.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>

        {/* Hospital Management System */}
        <div className="project-card">
          <h3 className="project-title">Hospital Management System</h3>
          <p className="project-description">
            Role-based login system for Patients and Admin. Includes appointment booking, doctor management, message inbox, and admin dashboard using React and Express.
          </p>
          <div className="project-links">
            <a
              href="https://hi-tech-hospital.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Dashboard
            </a>
            <a
              href="https://hi-tech-admin.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin Dashboard
            </a>
          </div>
        </div>

        {/* Surya Vision Electronics Mall */}
        <div className="project-card">
          <h3 className="project-title">Surya Vision – Electronics Mall</h3>
          <p className="project-description">
            A full-stack e-commerce platform for electronic products with categorized listings (Mobiles, TVs, ACs, etc.), dynamic filtering, cart system, Stripe payments, and role-based admin control.
          </p>
          <div className="project-links">
            <a
              href="https://surya-vision.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Dashboard
            </a>
            <a
              href="https://surya-vision-admin.onrender.com/admin-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
