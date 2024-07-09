'use client';

import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutPage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();
	// const isSkillRefInView = useInView(skillRef, {once:true});
	const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

	return (
		<motion.div
			className='h-full z-50'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			{/* CONTAINER */}
			<div className='h-full overflow-scroll lg:flex' ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div className='p-4 sm:p-8 md:p-12 lg:p-20  flex flex-col gap-24  lg:w-2/3 lg:pr-0 xl:w-1/2'>
					{/* BIOGRAPHY CONTAINER */}
					<div className='flex flex-col gap-10 justify-center'>
						{/* BIOGRAPHY IMAGE */}
						<Image
							src='/selfie.png'
							alt=''
							width={150}
							height={150}
							className='w-32 h-32 rounded-full object-cover self-center'
						/>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl self-center'>
							Nice to meet you!
						</h1>
						{/* BIOGRAPHY DESC */}
						<p className='text-lg bg-gradient-to-b from-gray-700 to-black text-white p-4 rounded-lg'>
							I&apos;m Sean Anih (pronounced{' '}
							<span className='italic'>Ah-nee</span>), a Software Engineer and
							Security Analyst holding certifications from ISC2 and CompTIA. I
							have a strong passion for programming and securing assets, and
							I&apos;m extremely excited to work with you and help you achieve
							your business goals. My career path has been an interesting mix of
							corporate finance and creative entrepreneurship, where I spent 5
							years working for Wells Fargo in a variety of roles and 12 years
							as an audio engineer, including 6 years running my own recording
							studio. Now entering the world of IT, I bring a diverse set of
							experiences, perspectives, and a commitment to pursuing growth and
							expertise in this amazing field!
						</p>

						{/* SCROLL SVG */}
						<div className='flex gap-2 justify-center items-center'>
							<motion.svg
								initial={{ opacity: 0.2, y: 0 }}
								animate={{ opacity: 1, y: '10px' }}
								transition={{
									repeat: Infinity,
									duration: 3,
									ease: 'easeInOut',
								}}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								width={50}
								height={50}
							>
								<path
									d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
									stroke='#000000'
									strokeWidth='1'
								></path>
								<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
								<path
									d='M15 11L12 14L9 11'
									stroke='#000000'
									strokeWidth='1'
								></path>
							</motion.svg>
						</div>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col gap-12 justify-center' ref={skillRef}>
						{/* SKILL TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl text-center'
						>
							SKILLS | TOOLS
						</motion.h1>
						{/* SKILL LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className='flex gap-4 flex-wrap justify-center'
						>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Python
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Javascript
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Linux
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								SQL
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Next JS
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Tailwind CSS
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Git
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Tableau
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Cybersecurity
							</div>
							<div className='rounded  p-2 text-sm md:text-base bg-black text-white hover:bg-svBlue hover:text-black'>
								Networking
							</div>
						</motion.div>
						{/* SCROLL SVG */}
						<div className='flex gap-2 justify-center items-center'>
							<motion.svg
								initial={{ opacity: 0.2, y: 0 }}
								animate={{ opacity: 1, y: '10px' }}
								transition={{
									repeat: Infinity,
									duration: 3,
									ease: 'easeInOut',
								}}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								width={50}
								height={50}
							>
								<path
									d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
									stroke='#000000'
									strokeWidth='1'
								></path>
								<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
								<path
									d='M15 11L12 14L9 11'
									stroke='#000000'
									strokeWidth='1'
								></path>
							</motion.svg>
						</div>
					</div>

					{/* 
						//* BIG BACKGROUND CONTAINER 
					*/}
					<div
						className='flex flex-col gap-24 justify-center pb-48'
						ref={experienceRef}
					>
						{/* EXPERIENCE TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl text-center'
						>
							BACKGROUND
						</motion.h1>
						{/* EXPERIENCE LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							// className='bg-black'
						>
							{/* EXPERIENCE LIST ITEM 1 */}
							<div className='flex justify-between h-72'>
								{/* LEFT */}
								<div className='w-2/5'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold text-lg rounded-b-lg rounded-s-lg border border-b-black'>
										Software Engineer || Security Analyst
									</div>
									{/* JOB COMPANY */}
									<div className='p-3 text-cyan-700 rounded bg-white font-bold w-fit'>
										Scripting Visuals
									</div>
									{/* JOB DESC */}
									<div className='p-3 italic bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg'>
										Launched
										<span className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-900 to-gray-700'>
											{' '}
											Scripting
										</span>{' '}
										<span className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-900 to-gray-700'>
											Visuals
										</span>{' '}
										following 2 years of learning and skill acquisition.
										<ul className='list-disc relative left-6 pr-6'>
											<li>ISC2 certified September 20023</li>
											<li>CompTIA certified June 2024</li>
										</ul>
										<br />
										Offering services in:
										<ul className='list-disc relative left-6 pr-6'>
											<li>Scripting & Automation</li>
											<li>Web & Desktop Apps</li>
											<li>Data Analysis & Visualization</li>
											<li>Cybersecurity Consultation</li>
										</ul>
									</div>
									{/* JOB DATE */}
									<div className='bg-black p-3 rounded-lg text-red-400 font-semibold w-fit'>
										2022 - Present
									</div>
								</div>
								{/* CENTER */}
								<div className='w-1/5 flex justify-center'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-2/5'></div>
							</div>
							{/* EXPERIENCE LIST ITEM 2 */}
							<div className='flex justify-between h-72'>
								{/* LEFT */}
								<div className='w-2/5'></div>
								{/* CENTER */}
								<div className='w-1/5 flex justify-center'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-2/5'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold text-lg rounded-b-lg rounded-s-lg border border-b-black'>
										Audio Engineer
									</div>
									{/* JOB COMPANY */}
									<div className='p-3 text-cyan-700 rounded bg-white font-bold w-fit'>
										Blue Notes Media, LLC
									</div>
									{/* JOB DESC */}
									<div className='p-3 italic bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg'>
										<ul className='list-disc relative left-6 pr-6'>
											<li>
												Provided recording, mixing and mastering services
												according to client specifications
											</li>
											<li>
												Ensured projects adhered to commercial recording
												industry standards
											</li>
										</ul>
									</div>
									{/* JOB DATE */}
									<div className='bg-black rounded-lg p-3 text-red-400 font-semibold w-fit'>
										2016 - 2022{' '}
									</div>
								</div>
							</div>
							{/* EXPERIENCE LIST ITEM 3 */}
							<div className='flex justify-between h-72'>
								{/* LEFT */}
								<div className='w-2/5'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold text-lg rounded-b-lg rounded-s-lg border border-b-black'>
										Research & Remediation Analyst
									</div>
									{/* JOB COMPANY */}
									<div className='p-3 text-cyan-700 rounded bg-white font-bold w-fit'>
										Wells Fargo Home Mortgage
									</div>
									{/* JOB DESC */}
									<div className='p-3 italic bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg'>
										During my time with Wells Fargo I worked as a:
										<ul className='list-disc relative left-6 pr-6'>
											<li>Default Loan Servicing Specialist</li>
											<li>Loan Adjustor Specialist</li>
											<li>Research & Remediation Analyst</li>
										</ul>
									</div>
									{/* JOB DATE */}
									<div className='bg-black p-3 rounded-lg text-red-400 font-semibold w-fit'>
										2010 - 2015
									</div>
								</div>
								{/* CENTER */}
								<div className='w-1/5 flex justify-center'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-2/5'></div>
							</div>
						</motion.div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
