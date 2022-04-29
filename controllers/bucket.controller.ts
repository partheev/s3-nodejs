import { s3 } from '../config/aws'

export const createBucket = async (bucketName: string) => {
    return s3
        .createBucket({
            Bucket: bucketName,
            CreateBucketConfiguration: {
                LocationConstraint: 'ap-south-1',
            },
        })
        .promise()
}

export const deleteBucket = async (bucketName: string) => {
    return s3.deleteBucket({ Bucket: bucketName }).promise()
}

export const getListofBuckets = async () => {
    return s3.listBuckets().promise()
}
