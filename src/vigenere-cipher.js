const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(bool) {
		this.type = bool === undefined || bool ? 'direct' : 'reverse';
		this.alphabet = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		];
	}
	encrypt(string, key) {
		if (string === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		const result = [];
		const stringArr = [...string.toUpperCase()];
		const keyArr = [...key.toUpperCase()];
		let stringIndex = 0;

		for (let i = 0; i < stringArr.length; i++) {
			if (!this.alphabet.includes(stringArr[i])) {
				result.push(stringArr[i]);
			} else {
				if (stringIndex === keyArr.length) {
					stringIndex = 0;
				}
				const currentLetterIndex = this.alphabet.indexOf(stringArr[i]);
				const shift = this.alphabet.indexOf(keyArr[stringIndex]);
				const cypheredLetterIndex =
					currentLetterIndex + shift >= 26
						? currentLetterIndex + shift - 26
						: currentLetterIndex + shift;
				result.push(this.alphabet[cypheredLetterIndex]);
				stringIndex++;
			}
		}

		return this.type === 'direct'
			? result.join('')
			: result.reverse().join('');
	}

	decrypt(string, key) {
		if (string === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		const result = [];
		const stringArr = [...string.toUpperCase()];
		const keyArr = [...key.toUpperCase()];
		let stringIndex = 0;

		for (let i = 0; i < stringArr.length; i++) {
			if (!this.alphabet.includes(stringArr[i])) {
				result.push(stringArr[i]);
			} else {
				if (stringIndex === keyArr.length) {
					stringIndex = 0;
				}
				const currentLetterIndex = this.alphabet.indexOf(stringArr[i]);
				const shift = this.alphabet.indexOf(keyArr[stringIndex]);
				const cypheredLetterIndex =
					currentLetterIndex - shift < 0
						? 26 - Math.abs(currentLetterIndex - shift)
						: currentLetterIndex - shift;
				result.push(this.alphabet[cypheredLetterIndex]);

				stringIndex++;
			}
		}

		return this.type === 'direct'
			? result.join('')
			: result.reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};
