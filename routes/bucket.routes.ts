import { Router } from 'express'
import {
    createBucket,
    deleteBucket,
    getListofBuckets,
} from '../controllers/bucket.controller'

const router = Router()

router
    .route('/bucket')

    .get(async (_req, res) => {
        const list = await getListofBuckets()

        res.send({ bucketsList: list })
    })
    .post(async (req, res) => {
        const { bucketName } = req.body

        const bucketcreatedRes = await createBucket(bucketName)
        res.send({
            message: 'New bucket created.',
            location: bucketcreatedRes.Location,
        })
    })
    .delete(async (req, res) => {
        const { bucketName } = req.body
        try {
            await deleteBucket(bucketName)
            res.send({
                message: `${bucketName} deleted.`,
            })
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: err })
        }
    })

export const bucketRoutes = router
