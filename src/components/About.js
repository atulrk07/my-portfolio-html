import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Git', icon: '📦' }
  ];

  const interests = [
    { name: 'AI', icon: '🤖' },
    { name: 'Cybersecurity', icon: '🔒' },
    { name: 'Software Engineering', icon: '💻' },
    { name: 'Finance', icon: '💰' }
  ];

  const hobbies = [
    { name: 'R&B Music', icon: '🎵' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Soccer', icon: '⚽' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Weightlifting', icon: '🏋️' },
    { name: 'Hiking', icon: '🥾' }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating innovative solutions through technology
            </p>
          </motion.div>

          <div className="about-main-layout">
            <motion.div className="about-profile-section" variants={itemVariants}>
              <div className="profile-image-container">
                <img src="/IMG_4452 copy.jpg" alt="Atul Kamath" />
              </div>
            </motion.div>

            <motion.div className="about-content-section" variants={itemVariants}>
              <div className="about-card journey-card">
                <h3>My Journey</h3>
                <p>
                  I'm a Computer Science and Applied Mathematics student at UC Berkeley, passionate about building scalable systems and data-driven products. 
                  I combine applied mathematics, software engineering, and finance to solve real-world problems 
                  and create meaningful impact through technology.
                </p>
                <p>
                  With interests spanning <strong>AI</strong>, <strong>cybersecurity</strong>, <strong>software engineering</strong>, and <strong>finance</strong>, 
                  I enjoy tackling complex challenges and turning ideas into reality. My approach is always 
                  data-driven and user-focused.
                </p>
              </div>

              <div className="about-card skills-card">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-grid">
          </div>

          <motion.div className="interests-section" variants={itemVariants}>
            <h3>My Interests</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className="interest-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="interest-icon">{interest.icon}</div>
                  <span className="interest-name">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div className="hobbies-section" variants={itemVariants}>
            <h3>Hobbies & Activities</h3>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  className="hobby-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="hobby-icon">{hobby.icon}</div>
                  <span className="hobby-name">{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
