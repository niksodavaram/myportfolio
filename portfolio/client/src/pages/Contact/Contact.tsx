import GotProjectForm from '../../components/GotProjectForm/GotProjectForm';
import '../../components/GotProjectForm/css/GotProjectForm.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>If you have a project in mind or just want to say hello, feel free to reach out!</p>
      <GotProjectForm />
    </div>
  );
}