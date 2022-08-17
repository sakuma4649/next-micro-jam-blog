import { createClient } from "microcms-js-sdk"
export const client = createClient({
    serviceDomain: "next-blog-mondus",
    apiKey: process.env.API_KEY,
})