export declare class KeyValue {
    readonly key: string;
    readonly value: KeyValues;
    constructor(key: string, value: KeyValues);
    getKeyByName(key: string): KeyValue | null;
    getKeysByName(key: string): KeyValue[] | null;
    getKeys(): KeyValue[] | null;
}

export declare type KeyValues = number | string | boolean | KeyValue[];

export declare function parseVdf(source: string): KeyValue | undefined;

declare function stringifyVdf(kv: KeyValue, { prettyPrint }?: {
    prettyPrint?: boolean | undefined;
}): string;
export { stringifyVdf as stringify }
export { stringifyVdf }

export { }
