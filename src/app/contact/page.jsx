'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const greeting = 'Looking forward to working with you!';

	const form = useRef();

	const containsSpecialChars = str => {
		const specialCharsRegex = /[@#$%^&*()":{}|<>]/g;
		return specialCharsRegex.test(str);
	};

	const sendEmail = e => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		const message = form.current['user_message'].value;

		if (containsSpecialChars(message)) {
			setError(true);
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				() => {
					setSuccess(true);
					form.current.reset();
				},
				() => {
					setError(true);
				}
			);
	};

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* TEXT CONTAINER */}
				<div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl text-center md:text-6xl lg:text-left mb-4 lg:mb-0'>
					<div>
						{greeting.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 5,
									repeat: Infinity,
									delay: index * 0.1,
								}}
							>
								{letter}
							</motion.span>
						))}
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form
					onSubmit={sendEmail}
					ref={form}
					className='h-3/5 w-5/6 px-4 self-center bg-gradient-to-b from-gray-200 rounded-xl text-xl flex flex-col justify-center md:px-20 py-4 mt-4 lg:mt-0 mb-4'
				>
					<span>Hey Sean,</span>
					<textarea
						rows={3}
						className='border-b-2 border-l-2 border-black bg-gradient-to-b from-gray-200 to-gray-400 outline-none p-2 mb-8 rounded-lg text-lg'
						name='user_message'
						required
					/>
					<span>My email address is:</span>
					<input
						name='user_email'
						type='email'
						className='border-b-2 border-l-2 border-black bg-gradient-to-b from-gray-200 to-gray-400 outline-none p-2 mb-8 rounded-lg'
						required
					/>
					<span>Regards</span>
					<button className='rounded-lg  p-2 transition ease-in-out duration-300 ring-2 ring-black  font-semibold text-black bg-cyan-500 hover:bg-svBlue'>
						Send
					</button>
					{success && (
						<span className='text-green-600 font-semibold'>
							Your message has been sent successfully!
						</span>
					)}
					{error && (
						<span className='text-red-400 font-semibold'>
							Something went wrong. Try again with no special characters.
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
