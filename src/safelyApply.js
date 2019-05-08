import {curry, apply} from "ramda";
import type {ListOfAny} from "./types/array";

/**
 * @since 0.0.1
 * @param callback
 * @param params
 * @returns {null|*}
 */
function safelyApply(params: ListOfAny, callback: any): any {
    if (typeof callback !== 'function') { return null; }
    return apply(callback, params);
}

export default curry(safelyApply);
