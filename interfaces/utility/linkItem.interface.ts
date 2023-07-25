export interface LinkItem {
	id: string;
	slug: string;
	__typename?: string;
	headline?: string;
	overskrift?: string;
	parent?: {
		slug: string;
	} | null;
}
