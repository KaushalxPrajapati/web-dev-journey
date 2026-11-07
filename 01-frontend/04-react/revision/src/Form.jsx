function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form Submitted');
}

export default function Form() {
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter text" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
