import {is, path as rPath, pipe, split, when} from "ramda";

/**
 * @since 0.0.4
 * @param path
 * @param object
 * @return value
 * @type {Function|*}
 */
const path = pipe(
    when(is(String), split('.')),
    rPath
);

export default path;
