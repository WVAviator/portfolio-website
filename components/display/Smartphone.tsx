import Image from 'next/image';
import React from 'react';
import smartphone from '/public/images/smartphone.png';

interface SmartphoneProps {
	className?: string;
}

const Smartphone: React.FC<React.PropsWithChildren<SmartphoneProps>> = ({ children, className = '' }) => {
	return (
		<div className={`relative ${className}`}>
			<Image src={smartphone} alt="A smart phone" />
			<div className="absolute w-[77.25%] aspect-[3/5] top-[13.9%] left-[11.4%] ">
				{children}
			</div>
		</div>
	);
};
export default Smartphone;
