import kaushalHeroImg from '../assets/output.png';

function Home() {
    return (
        <section className="hero-section">
            <div className="container-lg">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        <div className="hero-content">
                            <h1 className="fw-bold hero-title">Building responsive websites with clean and modern design</h1>

                            <p className="lead text-muted hero-text">
                                I create simple, responsive, and user-friendly web experiences using HTML, CSS, JavaScript, React, and Bootstrap. I focus on writing clean code, improving real-world projects, and building strong frontend development skills step by step.
                            </p>

                            <div className="d-flex gap-3 flex-wrap">
                                <button className="btn btn-primary px-3">View Projects</button>
                                <button className="btn btn-outline-secondary px-4 py-2">Contact Me</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="hero-img-wrapper">
                            <img src={kaushalHeroImg} alt="web design project showcase" className="img-fluid hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
