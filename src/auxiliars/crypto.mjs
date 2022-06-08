import bcrypt from "bcrypt"

import { config } from "dotenv"
if (process.env.NODE_ENV !== "production") config()

console.log(process.cwd(), process.env.NODE_ENV ,process.env.BCRYPT_ROUNDS)
export function createPasswordHash(password) {
    return bcrypt.hash(
        password + process.env.BCRYPT_SECRET,
        parseInt(process.env.BCRYPT_ROUNDS)
    )
}

export function verifyPassword(password, hash) {
    return bcrypt.compare(
        password + process.env.BCRYPT_SECRET,
        hash
    )
}