import ToasterContext from 'context/ToasterContext';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Quick Message',
	description: 'Quick Message',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToasterContext />
				{children}
			</body>
		</html>
	);
}
