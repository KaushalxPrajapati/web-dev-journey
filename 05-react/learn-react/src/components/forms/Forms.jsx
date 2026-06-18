import './Forms.css';

function Form() {
    return (
        <form>
            <div className="name">
                <label>
                    Enter first name: <input type="text" placeholder="First Name" />
                </label>

                <label>
                    Enter last name: <input type="text" placeholder="Last Name" />
                </label>

                <button type="submit">Submit</button>
            </div>

            <div className="select-group">
                {/* React Select */}
                <label>
                    <select>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </label>
            </div>

            <div className="radio-btn-group">
                {/* Radio Buttons */}
                <p>Gender:</p>
                <label>
                    <input type="radio" name="gender" value="Male" /> Male
                </label>
                <br />

                <label>
                    <input type="radio" name="gender" value="Female" /> Female
                </label>
            </div>

            <div className="text-area">
                <label>
                    Enter your message:
                    <textarea></textarea>
                </label>
            </div>
        </form>
    );
}

export default Form;
