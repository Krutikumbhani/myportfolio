'use client';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: '',
		email: '',
		contactNumber: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
	
			if (res.ok) {
				setSubmitted(true);
			} else {
				alert('Something went wrong!');
			}
		} catch (err) {
			console.error(err);
		}
	};
	

	const inputClasses =
		'block w-full border-none outline-none my-4 px-4 py-5 rounded-[11px] bg-[#1f2937] shadow-[0_4px_6px_-1px_#18c5c5,0_2px_4px_-2px_#18c5c5] text-white placeholder:text-gray-400';

	return (
		<div className="w-full max-w-[700px] mx-auto p-6 rounded-lg mt-10">
			{submitted ? (
				<p className="text-green-500 text-center text-lg font-medium">
					Thank you! We will contact you soon.
				</p>
			) : (
				<form onSubmit={handleSubmit}>
					<h2 className="text-3xl font-bold text-center text-[#18c5c5] mb-6">Contact Us</h2>

					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						className={inputClasses}
						required
						placeholder="Enter Your Full Name"
					/>

					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={inputClasses}
						required
						placeholder="Enter Your Email"
					/>

					<input
						type="tel"
						name="contactNumber"
						value={formData.contactNumber}
						onChange={handleChange}
						className={inputClasses}
						required
						placeholder="Enter Your Mobile Number"
					/>

					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className={`${inputClasses} resize-none h-20`}
						required
						placeholder="Write your message here..."
					/>

					<button
						type="submit"
						className="bg-[#18c5c5] text-white py-3 px-6 rounded-lg hover:bg-[#15a3a3] w-full mt-4"
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
