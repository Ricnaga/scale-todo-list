export interface IFilterProps {
	filter: 'all' | 'completed' | 'incomplete';
	setFilter: React.Dispatch<
		React.SetStateAction<'all' | 'completed' | 'incomplete'>
	>;
	sortByTitle: () => void;
}

export interface IFilterStyleProps {
	active?: string;
}
