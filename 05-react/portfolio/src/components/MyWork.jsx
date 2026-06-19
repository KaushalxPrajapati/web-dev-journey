function MyWork() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React to showcase my skills, projects, and learning journey.',
            tech: 'React, CSS, React Router',
        },
        {
            title: 'KP Living',
            description: 'A furniture e-commerce practice project with product cards, cart features, responsive design, and clean UI.',
            tech: 'HTML, CSS, JavaScript',
        },
        {
            title: 'React Practice App',
            description: 'A practice project created to understand components, props, routing, and page-based structure in React.',
            tech: 'React, Vite, JavaScript',
        },
    ];

    return (
        <main className="work-page">
            <section className="page-hero">
                <h1>My Work</h1>
                <p>Here are some projects and practice works I have built while learning web development.</p>
            </section>

            <section className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

                        <div className="project-tech">
                            <strong>Tech Used:</strong> {project.tech}
                        </div>

                        <button type="button">View Project</button>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default MyWork;
