import './hero.css';

function Hero() {
    return (
        <section className="hero-section">
            <div className="container-lg d-flex gap-5 mx-0-auto">
                <div className="row">
                    <div className="align-content-center left-aligned">
                        <div className="row">
                            <h1 className="fw-bold">Responsive left-aligned hero with image</h1>
                        </div>

                        <div className="row">
                            <p className="lead text-muted">
                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-6 d-flex gap-3">
                                <button className="btn btn-primary px-4 py-2">Primary</button>
                                <button className="btn btn-outline-secondary px-4 py-2">Default</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <img src="/src/assets/bootstrap-img-1.png" alt="bootstrap-themes" className="img-fluid hero-img" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
