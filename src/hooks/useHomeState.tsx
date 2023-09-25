import { createContext, useState, useMemo, useContext } from 'react';

type Props = {
	children: React.ReactNode;
};

const HomeContext = createContext({
	isDocked: false,
	setIsDocked: (isDocked: boolean) => {},
});

const HomeState = ({ children }: Props) => {
	const [isDocked, setIsDocked] = useState(false);

	const contextProps = useMemo(() => {
		return {
			isDocked,
			setIsDocked,
		};
	}, [isDocked, setIsDocked]);

	return (
		<HomeContext.Provider value={contextProps}>
			{children}
		</HomeContext.Provider>
	);
};

export function useHomeState() {
	return useContext(HomeContext);
}

export default HomeState;
