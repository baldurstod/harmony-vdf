export declare class KeyValue {
    readonly key: string;
    readonly value: KeyValues;
    constructor(key: string, value: KeyValues);
    getKeyByName(key: string): KeyValue | null;
    getKeysByName(key: string): KeyValue[] | null;
    getKeys(): KeyValue[] | null;
}

export declare type KeyValues = number | string | boolean | KeyValue[];

export declare function parse(source: string): KeyValue | undefined;

export declare function stringify(kv: KeyValue, { prettyPrint }?: {
    prettyPrint?: boolean | undefined;
}): string;

export { }
