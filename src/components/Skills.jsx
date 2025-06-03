import './Skills.css';

const Skills = () => {
  const skills = [
    
       'Full Stack Development',
       'Operating System',
       'Software Engineering', 
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git & GitHub',
    
    'Render Deployment',
    // 'Vercel Deployment',
    'REST APIs',
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
