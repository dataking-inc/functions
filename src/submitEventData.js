import formDataObject from "./formDataObject";

import type {StringKV} from "./types/object";

/**
 * @since 0.0.1
 * @param event: Event
 * @returns {StringKV}
 * @ref https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 */
export default function submitEventData(event: Event): StringKV {
    if (!(event.target instanceof HTMLFormElement)) { throw null; }
    const formData = new FormData(event.target);
    return formDataObject(formData);
}
