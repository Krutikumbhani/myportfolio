'use client';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		contactNumber: '',
	});

	const [submitted, setSubmitted] = useState(false);

	// Handle input change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', formData);
		setSubmitted(true);
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
			<h2 className="text-2xl font-bold text-center text-[#18c5c5]">Contact Us</h2>

			{submitted ? (
				<p className="text-green-600 text-center mt-4">Thank you! We will contact you soon.</p>
			) : (
				<form onSubmit={handleSubmit} className="mt-6">
					<div className="mb-4">
						<label className="block text-gray-700">First Name</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700">Last Name</label>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700">Contact Number</label>
						<input
							type="tel"
							name="contactNumber"
							value={formData.contactNumber}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-[#18c5c5] text-white py-2 rounded-lg hover:bg-[#15a3a3]"
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
