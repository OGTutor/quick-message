'use client';

import clsx from 'clsx';
import { FC } from 'react';

import EmptyState from '@/components/EmptyState';

import useConversation from '@/hooks/useConversation';

const Home: FC = () => {
	const { isOpen } = useConversation();

	return (
		<div
			className={clsx(
				'lg:pl-80 h-full lg:block',
				isOpen ? 'block' : 'hidden'
			)}
		>
			<EmptyState />
		</div>
	);
};

export default Home;
