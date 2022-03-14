import React, { useState } from "react";
import { useEffect } from "react";

export default function useCycledIndex(
	arrayLength: number,
	interval: number = 0
): [number, () => void, () => void] {
	const [currentIndex, setCurrentIndex] = useState(0);

	const increment = () => {
		if (currentIndex === arrayLength - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const decrement = () => {
		if (currentIndex === 0) {
			setCurrentIndex(arrayLength - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	};

	useEffect(() => {
		if (!interval) return;

		const timeout = setTimeout(increment, interval);

		return () => {
			clearTimeout(timeout);
		};
	}, [currentIndex]);

	return [currentIndex, increment, decrement];
}
