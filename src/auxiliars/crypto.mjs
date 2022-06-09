import bcrypt from "bcrypt"

import { config } from "dotenv"
if (process.env.NODE_ENV !== "production") config()

export function createPasswordHash(password) {
    //bcrypt.hash( password, numIteraciones)
    return bcrypt.hash(
        password + process.env.BCRYPT_SECRET,
        parseInt(process.env.BCRYPT_ROUNDS)
    )
}

export function verifyPassword(password, hash) {
    // bcrypt.compare( password, hash)
    return bcrypt.compare(
        password + process.env.BCRYPT_SECRET,
        hash
    )
}