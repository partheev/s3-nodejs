import express from 'express'
import dotenv from 'dotenv'
import AWS from 'aws-sdk'
import 'express-async-errors'
import { errorHandler } from './middlewares'
import { bucketRoutes } from './routes/bucket.routes'
dotenv.config()

console.log(process.env.S3_ACCESS_KEY)

const app = express()
app.use(express.json())

app.use(bucketRoutes)
app.get('/', (req, res) => {
    res.send('ehlllo')
})

app.use(errorHandler)

app.listen(process.env.PORT, () =>
    console.log(`server listening on ${process.env.PORT}`)
)
