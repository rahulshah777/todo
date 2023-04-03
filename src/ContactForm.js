// import React and necessary styles
import React, { useState } from 'react';
import './App.css';

// define the ContactForm functional component
function ContactForm() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  };

  // use the useState hook to manage the form data state and set initial state to the initial form data object
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

   // define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission (e.g. send data to server)
    console.log(formData);
    setFormData(initialFormData);
    window.location.reload();
  };

    // render the ContactForm component
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" className="form-control" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" className="form-control" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" id="comments" className="form-control" value={formData.comments} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

// export the ContactForm component so it can be used in other parts of the application
export default ContactForm;
