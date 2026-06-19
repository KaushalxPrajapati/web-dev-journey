function Home() {
    return(
         <section className="hero-section">
            <div className="container-lg d-flex gap-5 mx-0-auto">
                <div className="row">
                    <div className="align-content-center left-aligned">
                        <div className="row">
                            <h1 className="fw-bold">Building responsive websites with clean and modern design</h1>
                        </div>

                        <div className="row">
                            <p className="lead text-muted">I create simple, responsive, and user-friendly web experiences using HTML, CSS, JavaScript, React, and Bootstrap. I focus on writing clean code, improving real-world projects, and building strong frontend development skills step by step.</p>
                        </div>

                        <div className="row">
                            <div className="col-6 d-flex gap-3">
                                <button className="btn btn-primary px-3">View Projects</button>
                                <button className="btn btn-outline-secondary px-4 py-2">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <img src="/src/assets/bootstrap-img-1.png" alt="web design project showcase" className="img-fluid hero-img" />
                </div>
            </div>
        </section>

    );
}

export default Home;
