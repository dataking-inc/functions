import {complement, isNil, when} from "ramda";


/**
 * @since 0.0.1
 * @param callback
 * @param instance
 * @returns {any}
 */
const notNilThen = when(complement(isNil));

export default notNilThen;
