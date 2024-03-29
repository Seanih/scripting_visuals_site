'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
	{
		id: 1,
		color: 'from-gray-900 to-black',
		title: 'React Commerce',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 2,
		color: 'from-black to-blue-500',
		title: 'Next.js Medium Blog',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 3,
		color: 'from-blue-500 to-cyan-600',
		title: 'Vanilla Book App',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 4,
		color: 'from-cyan-600 to-cyan-800',
		title: 'Spotify Music App',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		link: 'https://lama.dev',
	},
];

const PortfolioPage = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-[600vh] relative' ref={ref}>
				<div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center'>
					Recent Projects
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
				<div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
					<motion.div style={{ x }} className='flex'>
						<div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-900' />
						{/* 
              //* PROJECT ITEMS
            */}
						{items.map(item => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
								key={item.id}
							>
								<div className='flex flex-col gap-8 text-white'>
									<h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
										{item.title}
									</h1>
									<div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
										<Image src={item.img} alt='' fill />
									</div>
									<p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
										{item.desc}
									</p>
									<Link href={item.link} className='flex justify-end'>
										<button className='text-sm md:p-4 md:text-md lg:p-8 lg:text-lg transition ease-in-out duration-300 p-4  ring-2 ring-black  text-black bg-svBlue hover:bg-cyan-200 font-semibold m-4 rounded'>
											See Demo
										</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className='w-screen h-screen flex flex-col items-center justify-center text-center bg-gradient-to-tr from-cyan-500 to-cyan-800'>
				<h1 className='text-5xl lg:text-7xl'>Need help with a project?</h1>
				<div className='relative '>
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
						viewBox='0 0 300 300'
						className='w-[325px] h-[325px] md:w-[650px] md:h-[650px] '
					>
						<defs>
							<path
								id='circlePath'
								d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
							/>
						</defs>
						<text fill='#000'>
							<textPath xlinkHref='#circlePath' className='text-lg'>
								Data Analysis - Automation - Desktop Apps -
							</textPath>
						</text>
					</motion.svg>
					<Link
						href='/contact'
						className='w-24 h-24 md:w-40 md:h-40 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white text-lg lg:text-xl rounded-full flex items-center justify-center hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out'
					>
						Contact Me
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
