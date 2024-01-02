import express, { Request, Response } from 'express'
import cors from 'cors'
const ShortUrl = require('./models/shortUrl')

const api = express()

api.use(cors())
api.use(express.json())

//DB
const conn = require('./db/conn')
conn();

//Routes
api.get('/test', (request: Request, response: Response) => {
    response.json({ success: true })
})

api.post('/shortUrls', async (request: Request, response: Response) => {
    const url = await ShortUrl.create({ full: request.body.fullUrl })

    response.status(201).json({ short_Url: `http://localhost:5000/${url.short}`})
})

api.get('/:shortUrl',async (request: Request, response: Response) => {
    const shortUrl = await ShortUrl.findOne({ short: request.params.shortUrl })
    if (shortUrl == null) return response.sendStatus(404)

    shortUrl.clicks++

    response.redirect(shortUrl.full)
})

api.listen(5000, () => {
    console.log("Express up");
});