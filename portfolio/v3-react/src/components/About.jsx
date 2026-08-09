function About() {
    return (
        <main className="about-page">
            <section className="page-hero">
                <h1>About Me</h1>
                <p>I am a passionate web development learner focused on building clean, responsive, and user-friendly websites using modern frontend technologies.</p>
            </section>

            <section className="about-content">
                <div className="about-card">
                    <h2>Who I Am</h2>
                    <p>I enjoy learning how websites work, how layouts are designed, and how React can be used to build dynamic user interfaces.</p>
                </div>

                <div className="about-card">
                    <h2>What I Am Learning</h2>
                    <p>I am currently improving my skills in HTML, CSS, JavaScript, React, React Router, Git, GitHub, and responsive web design.</p>
                </div>

                <div className="about-card">
                    <h2>My Goal</h2>
                    <p>My goal is to become a skilled software developer by building real projects, understanding core concepts deeply, and improving step by step.</p>
                </div>
            </section>

            <section className="skills-section">
                <h2>Skills I Am Building</h2>

                <div className="skills-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>React Router</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Responsive Design</span>
                </div>
            </section>
        </main>
    );
}

export default About;
