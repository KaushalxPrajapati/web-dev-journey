import './Forms.css';

function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
}

function Form() {
    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-row">
                <label className="field">
                    <span>First name</span>
                    <input type="text" placeholder="Enter your first name" />
                </label>

                <label className="field">
                    <span>Last name</span>
                    <input type="text" placeholder="Enter your last name" />
                </label>
            </div>

            <label className="field">
                <span>Country</span>
                <select>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </label>

            <div className="field">
                <span className="field-label">Gender</span>
                <div className="radio-row">
                    <label>
                        <input type="radio" name="gender" value="Male" /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Other" /> Other
                    </label>
                </div>
            </div>

            <label className="field">
                <span>Message</span>
                <textarea rows="4" placeholder="Write your message here..."></textarea>
            </label>

            <div className="form-actions">
                <button type="submit" className="primary">
                    Submit
                </button>
                <button type="reset" className="secondary">
                    Reset
                </button>
            </div>
        </form>
    );
}

export default Form;
