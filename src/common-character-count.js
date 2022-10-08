const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCommonCharacterCount = (s1, s2) => {
	let count = 0;
	const str1 = s1.split('');
	const str2 = s2.split('');
	let maxLines = Math.max(s1.length, s2.length);
	for (let i = 0; i < maxLines; i++) {
		if (str1) {
			const charOut1 = str1.pop();
			if (str2.includes(charOut1)) {
				const charOut2 = str2.splice(
					str2.findIndex((char) => char === charOut1),
					1
				);
				count++;
			}
		}
	}
	return count;
};

module.exports = {
	getCommonCharacterCount
};
