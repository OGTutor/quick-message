'use client';

import Image from 'next/image';
import { FC } from 'react';

import Modal from '@/components/Modal';

interface ImageModalProps {
	src?: string | null;
	isOpen?: boolean;
	onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
	if (!src) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="w-80 h-80">
				<Image alt="Image" className="object-cover" fill src={src} />
			</div>
		</Modal>
	);
};

export default ImageModal;
