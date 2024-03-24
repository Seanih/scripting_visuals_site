import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

const bai_font = Bai_Jamjuree({ weight: '500', subsets: ['latin'] });

export const metadata = {
	title: 'Scripting Visuals',
	description: 'Dashboards, Data Analysis & Desktop Applications',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={bai_font.className}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
