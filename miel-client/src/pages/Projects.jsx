// src/pages/Projects.jsx
function ProjectList() {
    const projects = ['Projet 1', 'Projet 2'];
    return (
      <div>
        <h2>Mes Projets</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Projects() {
    return (
      <section className="projects">
        <ProjectList />
      </section>
    );
  }
  
  export default Projects;
  