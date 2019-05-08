import type {StringKV} from "./types/object";
import {curry} from "ramda";

/**
 * @since 0.0.1
 * @param params
 * @param format
 * @return string
 */
function format(params: StringKV, format: string): string {
    const keys = Object.keys(params);
    const length = keys.length;
    let current = format;
    for(let i = 0; i < length; i++) {
        const key = keys[i];
        const value = params[key];
        current = current.replace(key, value);
    }
    return current;
}

export default curry(format);
