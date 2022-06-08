import express from "express"
import { config } from "dotenv"

import { verifyPassword, createPasswordHash } from "./auxiliars/crypto.mjs"

if (process.env.NODE_ENV !== "production") config()

const app = express()



app.listen(process.env.PORT,()=>{console.log("Ready...");})