import { useState, useEffect, useCallback } from 'react';

export default function useCycledIndex(
	arrayLength: number,
	interval: number = 0
): [number, () => void, () => void] {
	const [currentIndex, setCurrentIndex] = useState(0);

	const increment = useCallback(() => {
		if (currentIndex === arrayLength - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}, [currentIndex, arrayLength]);

	const decrement = useCallback(() => {
		if (currentIndex === 0) {
			setCurrentIndex(arrayLength - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	}, [currentIndex, arrayLength]);

	useEffect(() => {
		if (!interval) return;

		const timeout = setTimeout(increment, interval);

		return () => {
			clearTimeout(timeout);
		};
	}, [currentIndex, increment, interval]);

	return [currentIndex, increment, decrement];
}
