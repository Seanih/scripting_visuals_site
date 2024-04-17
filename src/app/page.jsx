'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
	return (
		<motion.div
			className='h-full text-white'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* Image Container */}
				<div className='h-1/2 lg:h-full lg:w-1/2 relative'>
					<Image
						src={'/big_sv.png'}
						alt='a pic'
						fill
						className='object-contain'
					/>
				</div>
				{/* Text Container */}
				<div className='mt-8 lg:mt-0 lg:h-full lg:w-1/2 flex flex-col gap-8  justify-center'>
					{/* Title */}
					<h1 className='text-5xl text-center md:text-6xl font-bold px-0'>
						Scripting{' '}
						<span>
							{'Visuals'.split('').map((letter, index) => (
								<motion.span
									key={index}
									className='text-transparent bg-clip-text bg-gradient-to-r from-white to-svBlue'
									initial={{ opacity: 1 }}
									animate={{ opacity: 0 }}
									transition={{
										duration: 3,
										repeat: Infinity,
										delay: index * 0.1,
									}}
								>
									{letter}
								</motion.span>
							))}
						</span>
					</h1>
					{/* DESC */}
					<p className='text-center text-2xl md:text-3xl lg:text-4xl'>
						Turning{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-svBlue font-semibold drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.9)]'>
							Ideas Into Apps
						</span>{' '}
						&{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-svBlue font-semibold drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.9)]'>
							Data Into Impact
						</span>
					</p>
					<ul className='text-center text-xl'>
						<li>Scripting & Automation</li>
						<li>Desktop & Web Applications</li>
						<li>Data Analysis & Visualization</li>
						<li>Interactive Dashboards</li>
					</ul>
					<div className='w-full flex gap-4 justify-center mb-12'>
						<Link href={'/portfolio'}>
							<button className='transition ease-in-out duration-300 p-4 rounded-lg ring-2 ring-black  font-semibold text-black bg-svBlue hover:bg-cyan-200'>
								View My Work
							</button>
						</Link>

						<Link href={'/contact'}>
							<button className='transition ease-in-out duration-300 p-4 rounded-lg ring-2 ring-black bg-black font-semibold text-white hover:bg-cyan-200 hover:text-black'>
								Contact Me
							</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
