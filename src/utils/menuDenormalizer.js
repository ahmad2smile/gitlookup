const { badRequest } = require("@hapi/boom");

let recursions = 0;
const MAX_COMPUTATION_ALLOWED = 100;

const entityDenormalizer = (parents, menu) => {
	recursions++;

	if (recursions > MAX_COMPUTATION_ALLOWED) {
		throw badRequest("Mannual computation termination of request");
	}

	const parentLevel = parents[0].level;
	const currentLevel = parentLevel + 1;

	if (isNaN(currentLevel)) {
		throw badRequest("Entity has Invalid property 'level'");
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

exports.menuDenormalizer = normalizedMenu => {
	const head = normalizedMenu[0];

	return entityDenormalizer(head, normalizedMenu);
};
