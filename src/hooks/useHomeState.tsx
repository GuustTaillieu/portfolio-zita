import { createContext, useState, useMemo, useContext } from 'react';

type Props = {
	children: React.ReactNode;
};

const HomeContext = createContext({
	isDocked: false,
	setIsDocked: (_: boolean) => {},
	projectToShow: null as number | null,
	setProjectToShow: (_: number | null) => {},
});

const HomeState = ({ children }: Props) => {
	const [isDocked, setIsDocked] = useState(false);
	const [projectToShow, setProjectToShow] = useState<number | null>(null);

	const contextProps = useMemo(() => {
		return {
			isDocked,
			setIsDocked,
			projectToShow,
			setProjectToShow,
		};
	}, [isDocked, setIsDocked, projectToShow, setProjectToShow]);

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
