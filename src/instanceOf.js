import {curry} from "ramda";

/**
 * @since 0.0.1
 * @param type
 * @param instance
 * @returns {boolean}
 */
function instanceOf(type: Function, instance: any): boolean {
    return instance instanceof type;
}

export default curry(instanceOf);
