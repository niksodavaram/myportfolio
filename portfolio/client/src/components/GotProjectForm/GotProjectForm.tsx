import React, { useState } from 'react';
import './css/GotProjectForm.css';

export default function GotProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    description: '',
    deadline: '',
    architectureDiagram: null,
    sequenceDiagram: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error handling
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For success feedback

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Prepare the form data for submission
    const apiUrl = import.meta.env.VITE_API_URL; // Ensure this is defined in your environment variables
    const formDataToSend = new FormData();

    // Append all form data to FormData object
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });

    try {
      // Send POST request to the backend
      const response = await fetch(`${apiUrl}/projects`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Response from server:', result);

      // Show success message
      setSuccessMessage('Your project details have been submitted successfully!');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description of the Project</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your project"
          rows={5}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="deadline">When do you want the project done?</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="architectureDiagram">Architecture Diagram</label>
        <input
          type="file"
          id="architectureDiagram"
          name="architectureDiagram"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .pdf"
        />
      </div>
      <div className="form-group">
        <label htmlFor="sequenceDiagram">Sequence Diagram</label>
        <input
          type="file"
          id="sequenceDiagram"
          name="sequenceDiagram"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .pdf"
        />
      </div>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}