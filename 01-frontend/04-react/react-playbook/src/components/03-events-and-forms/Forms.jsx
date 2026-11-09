import './Forms.css';
import { useState } from 'react';

function Form() {
    const [submittedData, setSubmittedData] = useState(null);

    // Form submit handler
    const handleFormSubmit = (event) => {
        // Crucial in React: prevent default browser behavior of submitting and reloading the page!
        event.preventDefault();

        // Extract values from form elements
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        setSubmittedData(data);
        console.log('Form submitted data:', data);
    };

    return (
        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <label className="field">
                        <span>First name</span>
                        <input name="firstName" type="text" placeholder="Enter first name" required />
                    </label>

                    <label className="field">
                        <span>Last name</span>
                        <input name="lastName" type="text" placeholder="Enter last name" required />
                    </label>
                </div>

                <label className="field">
                    <span>Country</span>
                    <select name="country">
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
                            <input type="radio" name="gender" value="Male" defaultChecked /> Male
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
                    <textarea name="message" rows="3" placeholder="Write your message here..."></textarea>
                </label>

                <div className="form-actions">
                    <button type="submit" className="primary">
                        Submit Form
                    </button>
                    <button type="reset" className="secondary" onClick={() => setSubmittedData(null)}>
                        Reset
                    </button>
                </div>
            </form>

            {/* Display submitted values when available */}
            {submittedData && (
                <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f4f4f5', borderRadius: '6px' }}>
                    <p style={{ fontWeight: 600, marginBottom: '6px' }}>Submitted Form Data:</p>
                    <pre style={{ margin: 0, fontSize: '0.85rem' }}>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Form;
