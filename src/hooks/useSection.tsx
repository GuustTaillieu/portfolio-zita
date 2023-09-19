import { createContext, useContext, useMemo, useState } from 'react';
import SCROLL_NAV_ITEMS from '../Components/ScrollNav/scroll-nav-info';

const SectionContex = createContext<{
	scrollPosition: number;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
	currentSectionTitle: string;
}>({
	scrollPosition: 0,
	setScrollPosition: () => {},
	currentSectionTitle: '',
});

export const SectionProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const currentSectionTitle = () => {
		const numItems = SCROLL_NAV_ITEMS.length;
		const sectionIndex =
			((scrollPosition % numItems) + numItems) % numItems;
		return SCROLL_NAV_ITEMS[sectionIndex].title;
	};

	const sectionContextProps = useMemo(
		() => ({
			scrollPosition,
			setScrollPosition,
			currentSectionTitle: currentSectionTitle(),
		}),
		[scrollPosition, setScrollPosition, currentSectionTitle]
	);

	return (
		<SectionContex.Provider value={sectionContextProps}>
			{children}
		</SectionContex.Provider>
	);
};

export default function useSection() {
	return useContext(SectionContex);
}
