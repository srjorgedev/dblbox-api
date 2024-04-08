import express from 'express'
import dataRoutes from './routes/dataRoutes.js'
import unitRoutes from './routes/unitRoutes.js'

const app = express()
const PORT = process.env.PORT || 9999

app.get('/', (req, res) => {
    res.send("<h1>Hola servidor</h1>")
})

app.use('/api/v1', dataRoutes)
app.use('/api/v1', unitRoutes)

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`)
})