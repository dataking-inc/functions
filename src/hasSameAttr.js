import {curry} from "ramda";

/**
 * @since 0.0.5
 * @param attr
 * @param a
 * @param b
 * @returns {boolean}
 * TODO : support symbol type for attr https://flow.org/en/docs/types/primitives/#toc-symbols
 */
function hasSameAttr(attr: string | number, a: Object, b: Object): boolean {
    return typeof a[attr] !== 'undefined' && a[attr] === b[attr];
}

export default curry(hasSameAttr);
