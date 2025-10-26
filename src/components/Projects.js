import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Quantitative Trading Algorithm',
      description: 'A sophisticated algorithmic trading system using machine learning for market prediction and automated execution. Implements various strategies including momentum, mean reversion, and arbitrage.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'QuantLib'],
      category: 'quant',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Stock Analysis',
      description: 'Deep learning model for stock price prediction using LSTM networks and sentiment analysis from news and social media data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'BeautifulSoup'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'High-Performance Backend API',
      description: 'Scalable REST API built with microservices architecture, featuring real-time data processing, caching, and load balancing for financial applications.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'quant', name: 'Quantitative Finance' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'backend', name: 'Backend Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and technical expertise
            </p>
          </motion.div>

          <motion.div className="filter-tabs" variants={itemVariants}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <p>Interested in seeing more of my work?</p>
            <motion.a
              href="https://github.com/atulrk07"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
