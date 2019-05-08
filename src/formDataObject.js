import type {StringKV} from "./types/object";

/**
 * @since 0.0.1
 * @param formData
 * @returns {StringKV}
 */
export default function formDataObject(formData: FormData): StringKV {
    const output = {};
    formData.forEach((value, key) => { output[key] = value; });
    return output;
};
