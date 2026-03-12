import express from 'express'
import songsRouter from './routes/songs.js'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')))

// API routes
app.use('/songs', songsRouter)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

// 404 handler for frontend routes 
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'public/404.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
  console.log(`📀 Connected to database: ${process.env.DB_NAME}`)
})