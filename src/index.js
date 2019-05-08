import formDataObject from "./formDataObject";
import method from "./method";
import safelyApply from "./safelyApply";
import submitEventData from "./submitEventData";
import validateEmail from "./validateEmail";

const module = {
    formDataObject,
    method,
    safelyApply,
    submitEventData,
    validateEmail,
};

window.dkjs = module;

export { default as formDataObject } from "./formDataObject";
export { default as method } from "./method";
export { default as safelyApply } from "./safelyApply";
export { default as submitEventData } from "./submitEventData";
export { default as validateEmail } from "./validateEmail";
