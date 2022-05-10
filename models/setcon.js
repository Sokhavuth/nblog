import { MongoClient } from 'mongodb'

const DATABASE_URI = process.env.DATABASE_URI
const DATABASE_DB = process.env.DB_NAME

// check the DATABASE URI
if (!DATABASE_URI) {
    throw new Error('Define the DATABASE_URI environmental variable')
}

// check the DATABASE DB
if (!DATABASE_DB) {
    throw new Error('Define the DATABASE_DB environmental variable')
}

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    // Connect to cluster
    let client = new MongoClient(DATABASE_URI, opts)
    await client.connect()
    let db = client.db(DATABASE_DB)

    // set cache
    cachedClient = client
    cachedDb = db

    return {
        client: cachedClient,
        db: cachedDb,
    }
}