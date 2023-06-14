import AuthContext from 'context/AuthContext';
import ToasterContext from 'context/ToasterContext';

import '@/assets/styles/globals.css';

import ActiveStatus from './components/ActiveStatus';

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
			<body>
				<AuthContext>
					<ToasterContext />
					<ActiveStatus />
					{children}
				</AuthContext>
			</body>
		</html>
	);
}
