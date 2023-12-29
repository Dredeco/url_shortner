import express, { Request, Response } from 'express'

const api = express()

api.get('/test', (request: Request, response: Response) => {
    response.json({ success: true })
})

api.listen(5000, () => console.log("Express up"))