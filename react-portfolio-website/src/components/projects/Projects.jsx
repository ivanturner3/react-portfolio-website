/**
 * Projects Component - Portfolio Showcase
 * 
 * Displays a filterable collection of projects with detailed information.
 * Includes both public and private projects with appropriate indicators.
 * 
 * Features:
 * - Multi-dimensional filtering (category + visibility)
 * - Filter by: Frontend, Backend, Full Stack, Public, Private
 * - Mutually exclusive filters within each group
 * - Project cards with detailed information
 * - GitHub links for public projects
 * - Privacy indicators and reasons for private projects
 * - Technology badges
 * - Impact statements
 * 
 * Filter Logic:
 * - Category filters (Frontend/Backend/Full Stack) are mutually exclusive
 * - Visibility filters (Public/Private) are mutually exclusive
 * - Filters can be combined across groups
 * - "All Projects" resets all filters
 * 
 * Each project includes:
 * - Title and description
 * - Technology stack
 * - Category tags
 * - GitHub link (if public)
 * - Privacy reason (if private)
 * - Impact/outcome statement
 */

import React, { useState } from 'react';
import './projects.css';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  // State for tracking active filters
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],    // Frontend, Backend, Full Stack
    visibility: []     // Public, Private
  });
  
  // Project data array - each project has metadata for filtering and display
  const projects = [
    {
      id: 1,
      title: 'This Website',
      description: 'Modern, responsive personal website built with React. Features smooth animations, dark theme, and optimized performance. Demonstrates strong frontend skills and attention to design.',
      tech: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      categories: ['frontend'],
      github: 'https://github.com/ivanturner3/react-portfolio-website',
      impact: 'Personal branding',
      private: false,
      privateReason: ''
    },
    {
      id: 7,
      title: 'Deep Q-Learning Snake Agent (Reinforcement Learning)',
      description: 'Implemented a Deep Q-Network (DQN) agent from scratch to learn the Snake game through reinforcement learning. Designed the full RL training loop including state representation, epsilon-greedy exploration strategy, experience replay, and Bellman equation-based Q-value updates. Built a PyTorch-based neural network for value approximation and integrated real-time training visualization and model persistence.',
      tech: ['Python', 'PyTorch', 'Reinforcement Learning', 'Deep Q-Learning (DQN)', 'NumPy', 'Matplotlib', 'Pygame'],
      categories: ['frontend', 'backend', 'fullstack'],
      github: 'https://github.com/ivanturner3/snake-reinforcement-learning',
      impact: 'End-to-end reinforcement learning system with experience replay and neural network optimization',
      private: false,
      privateReason: ''
    },
    {
      id: 3,
      title: 'Support Analytics Dashboards',
      description: 'Built internal analytics dashboards using Python and JavaScript to surface operational metrics, derive analytics, and support decision-making.',
      tech: ['Python', 'Shiny', 'JavaScript', 'SQLite', 'Dashboards'],
      categories: ['backend', 'frontend', 'fullstack'],
      github: null,
      impact: 'Improved visibility into support team performance',
      private: true,
      privateReason: 'Internal tooling'
    },
    {
      id: 8,
      title: 'Applied Machine Learning Capstone',
      description: 'Completed a comprehensive, graduate level applied machine learning capstone project focused on solving a real-world analytical problem using structured data. The project emphasized end-to-end ML workflow, including data exploration, feature engineering, model selection, evaluation, and interpretation of results.',
      tech: ['Python','Pandas','NumPy','scikit-learn', 'TensorFlow', 'Keras', 'Machine Learning','Computer Vision'],
      categories: ['backend', 'frontend', 'fullstack'],
      github: null,
      impact: 'Achieved over 85% accuracy on a complex classification task',
      private: true,
      privateReason: 'Academic policy'
    },
    {
      id: 2,
      title: 'Real-Time Data Analytics Pipeline',
      description: 'Designed and implemented a Python-based data ingestion and ETL pipeline to process high-velocity MQTT streams into PostgreSQL for analytics and monitoring. Focused on reliability, schema design, and scalable query performance.',
      tech: ['Python', 'PostgreSQL', 'Pandas', 'SQLAlchemy', 'MQTT', 'ETL'],
      categories: ['backend'],
      github: null,
      impact: 'Production analytics pipeline supporting operational insights',
      private: true,
      privateReason: 'Internal systems data'
    },
    {
      id: 9,
      title: 'Frontend & Full-Stack Web Applications',
      description: 'Built responsive frontend applications and full-stack systems for small businesses, emphasizing clean UI, API integration, and maintainable architecture.',
      tech: ['React', 'JavaScript', 'Node.js', 'REST APIs'],
      categories: ['frontend', 'backend', 'fullstack'],
      github: null,
      impact: 'End-to-end web application development',
      private: true,
      privateReason: 'Sensitive client data'
    },
    {
      id: 6,
      title: 'Network Traffic Monitoring Dashboard',
      description: 'Built a real-time network traffic analysis dashboard to capture, process, and visualize packet-level data. The system performs live packet inspection, protocol distribution analysis, and traffic volume monitoring, providing insight into network behavior and usage patterns.',
      tech: ['Python', 'Scapy', 'Streamlit', 'Pandas', 'Plotly', 'Network Analysis'],
      categories: ['frontend', 'backend', 'fullstack'],
      github: 'https://github.com/ivanturner3/Network-Traffic-Dashboard',
      impact: 'Real-time visibility into network traffic patterns and protocol behavior',
      private: false,
      privateReason: ''
    },
    {
      id: 5,
      title: 'SaaS Support Automation Suite',
      description: 'Developed a suite of Python and batch scripts to automate routine cloud support tasks and an alerting system integrated with Microsoft Teams and Outlook.',
      tech: ['Python', 'Batch Scripting', 'API Integration', 'Automation'],
      categories: ['backend'],
      github: null,
      impact: 'Significantly reduced duration of outages and customer downtime',
      private: true,
      privateReason: 'Company Internal Tools'
    },
    {
      id: 4,
      title: 'Custom Java Proxy & Integration Services',
      description: 'Engineered custom Java-based proxy services to securely mediate communication between isolated web applications and services in shared infrastructure environments.',
      tech: ['Java', 'Servlets', 'HTTP/HTTPS', 'System Integration'],
      categories: ['backend'],
      github: null,
      impact: 'Enabled secure cross-application communication',
      private: true,
      privateReason: 'Company IP'
    }
  ];

  /**
   * Toggle a filter on or off
   * Filters within the same group are mutually exclusive
   * (selecting a new filter deselects the previous one in the same group)
   * 
   * @param {string} group - Filter group ('categories' or 'visibility')
   * @param {string} value - Filter value to toggle
   */
  const toggleFilter = (group, value) => {
    setSelectedFilters(prev => {
      const exists = prev[group].includes(value);
      // If filter is already selected, deselect it; otherwise select it
      const nextGroup = exists ? [] : [value];

      return {
        ...prev,
        [group]: nextGroup
      };
    });
  };

  /**
   * Reset all filters to show all projects
   */
  const resetFilters = () => {
    setSelectedFilters({ categories: [], visibility: [] });
  };

  /**
   * Filter projects based on selected filters
   * Applies both category and visibility filters if active
   */
  const filteredProjects = projects.filter(project => {
    const hasCategoryFilter = selectedFilters.categories.length > 0;
    const hasVisibilityFilter = selectedFilters.visibility.length > 0;

    // Check if project matches category filter
    const categoryMatch = !hasCategoryFilter
      || project.categories.some(category => selectedFilters.categories.includes(category));

    // Check if project matches visibility filter
    const visibilityMatch = !hasVisibilityFilter
      || (selectedFilters.visibility.includes('public') && !project.private)
      || (selectedFilters.visibility.includes('private') && project.private);

    // Project must match both filters to be displayed
    return categoryMatch && visibilityMatch;
  });

  return (
    <section id='projects'>
      <h5>What I've Built</h5>
      <h2>Featured Projects</h2>

      {/* Filter buttons */}
      <div className="projects__filters">
        <button
          className={`filter-btn ${(selectedFilters.categories.length === 0 && selectedFilters.visibility.length === 0) ? 'active' : ''}`}
          onClick={resetFilters}
        >
          All Projects
        </button>
        <button
          className={`filter-btn ${selectedFilters.categories.includes('frontend') ? 'active' : ''}`}
          onClick={() => toggleFilter('categories', 'frontend')}
        >
          Frontend
        </button>
        <button
          className={`filter-btn ${selectedFilters.categories.includes('backend') ? 'active' : ''}`}
          onClick={() => toggleFilter('categories', 'backend')}
        >
          Backend
        </button>
        <button
          className={`filter-btn ${selectedFilters.categories.includes('fullstack') ? 'active' : ''}`}
          onClick={() => toggleFilter('categories', 'fullstack')}
        >
          Full Stack
        </button>
        <button
          className={`filter-btn ${selectedFilters.visibility.includes('public') ? 'active' : ''}`}
          onClick={() => toggleFilter('visibility', 'public')}
        >
          Public
        </button>
        <button
          className={`filter-btn ${selectedFilters.visibility.includes('private') ? 'active' : ''}`}
          onClick={() => toggleFilter('visibility', 'private')}
        >
          Private
        </button>
      </div>

      {/* Project cards - dynamically filtered */}
      <div className="container projects__container">
        {filteredProjects.map(project => (
          <article key={project.id} className="project__card">
            <div className="project__card-header">
              <h3>{project.title}</h3>
            </div>

            {/* Project visibility badge and GitHub link or private reason */}
            <div className="project__status">
              <span className={`project__badge ${project.private ? 'is-private' : 'is-public'}`}>
                {project.private ? 'Private' : 'Public'}
              </span>
              {project.private ? (
                project.privateReason && (
                  <div className="project__reason">
                    <span className="project__reason-label">Reason:</span>
                    <span className="project__status-detail">{project.privateReason}</span>
                  </div>
                )
              ) : (
                project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__link">
                    <BsGithub />
                    <span className="project__link-text">GitHub Repo Link</span>
                  </a>
                ) : null
              )}
            </div>

            <p className="project__description">{project.description}</p>

            <div className="project__tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project__impact">
              <span className="impact-badge">{project.impact}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
