import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from '../config/db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM songs ORDER BY id')
    console.log(`📊 Fetched ${result.rows.length} songs from database`)
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('❌ Error fetching songs:', error)
    res.status(500).json({ error: 'Database error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM songs WHERE id = $1', [id])
    
    if (result.rows.length === 0) {
      console.log(`❌ Song with ID ${id} not found`)
      return res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
    }
    
    console.log(`📀 Serving song page for ID: ${id}`)
    res.status(200).sendFile(path.join(__dirname, '../public/song.html'))
  } catch (error) {
    console.error('❌ Error fetching song:', error)
    try {
      res.status(500).sendFile(path.join(__dirname, '../public/404.html'))
    } catch {
      res.status(500).send('Server Error')
    }
  }
})

export default router