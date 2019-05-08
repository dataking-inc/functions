import {curry} from "ramda";

/**
 * @since 0.0.1
 * @param yes
 * @param no
 * @param boolCallback
 * @returns {*}
 */
function ifElseValue<Yes, No>(yes: Yes, no: No, boolCallback: any): Yes | No {
    const bool: boolean = Boolean(typeof boolCallback === 'function' ? boolCallback() : boolCallback);
    return bool ? yes : no;
}

export default curry(ifElseValue);
