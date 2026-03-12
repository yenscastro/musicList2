import pool from './db.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...')
    
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8')
    await pool.query(sql)
    
    console.log('✅ Database seeded successfully!')
    console.log('🎵 Your 6 songs are now in the database')
    
    // Verify the data
    const result = await pool.query('SELECT * FROM songs')
    console.log(`📊 Total songs in database: ${result.rows.length}`)
    
  } catch (error) {
    console.error('❌ Error seeding database:', error)
  } finally {
    await pool.end()
  }
}

seedDatabase()