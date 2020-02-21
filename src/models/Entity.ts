export interface Entity {
	id: number;
	title: string;
	level: number;
	children: Array<Entity>;
	parent_id: number | null;
}
