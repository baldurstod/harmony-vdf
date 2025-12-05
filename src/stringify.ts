import { KeyValue, KeyValues } from './keyvalue';

export function stringify(kv: KeyValue, { prettyPrint = true } = {}) {
	let buffer = '';

	let indent = '';

	let objectStack: (KeyValue | true)[] = [];
	for (let i = (kv.value as KeyValue[]).length - 1; i >= 0; --i) {
		objectStack.push((kv.value as KeyValue[])[i]!);
	}

	let currentEntity: KeyValue | undefined | true = objectStack.pop();
	while (currentEntity) {
		if (currentEntity === true) {
			if (prettyPrint) {
				indent = indent.slice(0, -1);
			}
			buffer += `${indent}}\n`;
		} else {
			const value: KeyValues = currentEntity.value;
			if (Array.isArray(value)) {
				// sub object

				buffer += `${indent}${escape(currentEntity.key)}\n${indent}{\n`;
				if (prettyPrint) {
					indent += '\t';
				}

				// We push true to indicate end of an object
				objectStack.push(true);

				// We are iterating in reverse order cause our stack is LIFO
				for (let i = value.length - 1; i >= 0; --i) {
					objectStack.push(value[i]!);
				}
			} else {
				// primitive value
				buffer += `${indent}${escape(currentEntity.key)} ${escape(String(currentEntity.value))}\n`;

			}
		}
		currentEntity = objectStack.pop();
	}

	return buffer;
}

function escape(value: string, forceQuotes = false) {
	let str = String(value);

	const quotify = forceQuotes || /[\s\r\n"'{}]/.test(str) || str.length == 0;

	if (quotify) {
		str = str.replaceAll('"', '\\"');
		str = str.replaceAll('\r', '\\r');
		str = str.replaceAll('\n', '\\n');
		return '"' + str + '"';
	}

	return str;
}
