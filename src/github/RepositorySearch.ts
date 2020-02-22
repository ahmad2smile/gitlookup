import { Repository } from "./Repository";
export interface RepositorySearch {
	total_count: number;
	items: Array<Repository>;
}
