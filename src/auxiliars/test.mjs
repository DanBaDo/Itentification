import { createPasswordHash, verifyPassword } from "./crypto.mjs"
import { assert } from "chai"

describe("Crypto functions", ()=>{
    context("for a null", ()=>{
        it('must return a 60 characters length string', async ()=> {
            const hash = await createPasswordHash()
            assert.isString(hash)
            assert.strictEqual(hash.length, 60)
        })
    })
    context("for a empty string", ()=>{
        it('must return a 60 characters length string', async ()=> {
            const hash = await createPasswordHash("")
            assert.isString(hash)
            assert.strictEqual(hash.length, 60)
        })
    })
    context("for any string", ()=>{
        it('must return a 60 characters length string', async ()=> {
            const hash = await createPasswordHash("abc123.")
            assert.isString(hash)
            assert.strictEqual(hash.length, 60)
        })
    })
    context("with a valid password", ()=>{
        it('sould return a promise resolving in true', async ()=>{
            const hash = await createPasswordHash("abc123.")
            const isValid = await verifyPassword("abc123.", hash)
            assert.isTrue(isValid)
        })
    })
    context("with a invalid password", async ()=>{
        it("sould return a promise resolving in false", async ()=>{
            const hash = await createPasswordHash("123456")
            const isValid = await verifyPassword("abc123.", hash)
            assert.isFalse(isValid)
        })
    })
    context("for any values", async ()=>{
        it("always returns a different string", async ()=>{
            const hash1 = await createPasswordHash("123456")
            const hash2 = await createPasswordHash("123456")
            assert.notEqual(hash1, hash2)
        })
    })
})