export function Email() {
    const email = "alexsei@gmail.com"
    const emailRegex =  /^[^\s@]+@[^\s@]+@[^\s@]+\.[^\s@]+$/
    const check = emailRegex.test(email)

    return check ? true : email

}