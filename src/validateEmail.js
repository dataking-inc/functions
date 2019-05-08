/**
 * @since 0.0.1
 * @param email: string
 * @returns {boolean}
 */
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email: string): boolean {
    return re.test(String(email).toLowerCase());
}

export default validateEmail;
