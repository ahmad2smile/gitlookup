import { NormalizedMenu } from "../models/NormalizedMenu";
import { Menu } from "../models/Menu";
import { Entity } from "../models/Entity";
import { Boom } from "@hapi/boom";

const entityDenormalizer = (
	parents: Array<Entity>,
	menu: NormalizedMenu
): Array<Entity> => {
	const parentLevel = parents[0].level;
	const currentLevel = parentLevel + 1;

	if (isNaN(currentLevel)) {
		throw new Boom("Invalid entity 'level' property");
	}

	// NOTE: Protected with isNaN above
	// also input validation on API for 'level' will always be number
	// eslint-disable-next-line security/detect-object-injection
	const children = menu[currentLevel];

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
