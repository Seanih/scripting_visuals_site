'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const text = 'Looking forward to working with you!';

	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

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
				<div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl text-center md:text-6xl lg:text-left'>
					<div>
						{text.split('').map((letter, index) => (
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
					className='h-3/5 w-5/6 px-4 self-center bg-red-50 rounded-xl text-xl flex flex-col justify-center md:px-20 py-8 mt-4 lg:mt-0 mb-4'
				>
					<span>Hey Sean,</span>
					<textarea
						rows={5}
						className='bg-svBlue border-b-2 border-b-black outline-none px-2 mb-8'
						name='user_message'
					/>
					<span>My mail address is:</span>
					<input
						name='user_email'
						type='text'
						className='bg-svBlue border-b-2 border-b-black outline-none px-2 mb-8'
					/>
					<span>Regards</span>
					<button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
						Send
					</button>
					{success && (
						<span className='text-green-600 font-semibold'>
							Your message has been sent successfully!
						</span>
					)}
					{error && (
						<span className='text-red-600 font-semibold'>
							Something went wrong!
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
