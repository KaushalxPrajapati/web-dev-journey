function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Message submitted successfully!');
    }

    return (
        <main className="bg-light py-5">
            <div className="container">
                <section className="text-center mb-5">
                    <h1 className="fw-bold display-5">Contact Me</h1>
                    <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '700px' }}>
                        Have a question, project idea, or opportunity? Feel free to reach out. I would be happy to connect with you.
                    </p>
                </section>

                <section className="row g-4 align-items-stretch">
                    <div className="col-lg-5">
                        <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                            <h2 className="fw-bold mb-3">Get in Touch</h2>

                            <p className="text-muted">I am currently learning and building projects in web development. You can contact me for collaboration, feedback, or project-related discussions.</p>

                            <div className="mt-4">
                                <p className="mb-3">
                                    <strong>Email:</strong> <span className="text-muted">your-email@example.com</span>
                                </p>

                                <p className="mb-3">
                                    <strong>Location:</strong> <span className="text-muted">Jamshedpur, Jharkhand</span>
                                </p>

                                <p className="mb-0">
                                    <strong>Available For:</strong> <span className="text-muted">Web Development Projects</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form className="bg-white shadow-sm rounded-4 p-4 h-100" onSubmit={handleSubmit}>
                            <h2 className="fw-bold mb-4">Send a Message</h2>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Name
                                </label>
                                <input type="text" id="name" className="form-control form-control-lg" placeholder="Enter your name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email
                                </label>
                                <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter your email" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Message
                                </label>
                                <textarea id="message" className="form-control" rows="6" placeholder="Write your message" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg px-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Contact;
