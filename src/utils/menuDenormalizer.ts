import { NormalizedMenu } from "../models/NormalizedMenu";
import { Menu } from "../models/Menu";
import { Entity } from "../models/Entity";

const entityDenormalizer = (
	parents: Array<Entity>,
	menu: NormalizedMenu
): Array<Entity> => {
	const children = menu[parents[0].level + 1];

	if (!(children && children.length)) {
		return parents;
	}

	// Recursion - Recurse if parent has children
	const deNormalizedChildren = entityDenormalizer(children, menu);

	return parents.map(parent => {
		deNormalizedChildren.forEach(c => {
			if (c.parent_id === parent.id) {
				parent.children.push(c);
			}
		});

		return parent;
	});
};

export const menuDenormalizer = (normalizedMenu: NormalizedMenu): Menu => {
	const head: Array<Entity> = normalizedMenu[0];

	return entityDenormalizer(head, normalizedMenu);
};
