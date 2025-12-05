export type KeyValues = number | string | boolean | KeyValue[];

export class KeyValue {
	readonly key: string;
	readonly value: KeyValues;

	constructor(key: string, value: KeyValues) {
		this.key = key;
		this.value = value;
	}

	getKeyByName(key: string) {
		if (Array.isArray(this.value)) {
			for (let subValue of (this.value as KeyValue[])) {
				if (subValue.key == key) {
					return subValue;
				}
			}
		}
		return null;
	}

	getKeysByName(key: string) {
		if (Array.isArray(this.value)) {
			const res = [];
			for (let subValue of this.value) {
				if (subValue.key == key) {
					res.push(subValue);
				}
			}
			return res;
		}
		return null;
	}

	getKeys() {
		if (Array.isArray(this.value)) {
			const res = [];
			for (let subValue of this.value) {
				res.push(subValue);
			}
			return res;
		}
		return null;
	}
}
