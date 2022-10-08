const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = (members) => {
	if (Array.isArray(members) && members.length) {
		const realMembers = members.filter(
			(member) =>
				typeof member === 'string' &&
				member.length > 0 &&
				/^[a-z]+$/i.test(member.trimStart()[0])
		);

		return realMembers
			.map((el) =>
				el[0] === ' '
					? el.trimStart()[0].toUpperCase()
					: el[0].toUpperCase()
			)
			.sort()
			.join('');
	}
	return false;
};

module.exports = {
	createDreamTeam
};
