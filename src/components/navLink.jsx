'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
	const pathName = usePathname();

	return (
		<Link
			className={`rounded p-1 ${
				pathName === link.url && 'bg-black text-white '
			} hover:bg-black hover:text-white`}
			href={link.url}
		>
			<div
				className={`${
					pathName == link.url &&
					'text-transparent bg-clip-text bg-gradient-to-r from-white to-svBlue'
				}`}
			>
				{link.title}
			</div>
		</Link>
	);
};

export default NavLink;
