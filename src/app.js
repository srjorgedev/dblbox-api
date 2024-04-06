import express from 'express'
import dataRoutes from './routes/dataRoutes.js'

const app = express()
const PORT = process.env.PORT || 9999

app.get('/', (req, res) => {
    res.send("<h1>Hola servidor</h1>")
})

app.use('/api', dataRoutes)

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`)
})