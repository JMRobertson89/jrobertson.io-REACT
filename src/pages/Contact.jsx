import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
	const form = useRef();
	const [message, setMessage] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setMessage({ type: 'success', text: 'Message sent successfully!' });
					form.current.reset();
					console.log('SUCCESS!');
					// e.target.reset();
				},
				(error) => {
					setMessage({
						type: 'error',
						text: `Failed to send message: ${error.text}`,
					});
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className="contact-container">
			<section className="contact-me-section">
				<h1>Contact Me</h1>
				<p>
					If you’re interested in discussing an employment opportunity,
					collaborating on an exciting project, or simply have a question you
					would like to ask, please don’t hesitate to reach out! I am always
					open to new connections, creative ventures, and meaningful
					conversations. I look forward to connecting and exploring potential
					opportunities together.
				</p>

				<p>
					Fill out the form below or email me directly at{' '}
					<a href="mailto:josh@jrobertson.io">josh@jrobertson.io</a>.
				</p>
			</section>
			<section className="contact-form-section">
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea rows={10} cols={70} name="message" />
					{message && <p className={`message ${message.type}`}>{message.text}</p>}
					<input className="button" type="submit" value="Send" />
				</form>
			</section>
		</div>
	);
}
export default Contact;
