'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<div
				key={pathName}
				className='w-screen h-screen bg-gradient-to-b from-gray-300 to-gray-900'
			>
				<motion.div
					className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.25, ease: 'easeOut' }}
				/>
				<motion.div
					className='fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl cursor-default z-50 w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-svBlue'
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
				>
					{/* DISPLAY PATHNAME */}
					{pathName == '/' ? 'HOME' : pathName.substring(1).toUpperCase()}
				</motion.div>
				<motion.div
					className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.25 } }}
				/>
				<div className='h-24'>
					<Navbar />
				</div>
				<div className='h-[calc(100vh-6rem)]'>{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;