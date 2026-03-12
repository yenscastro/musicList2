import pool from './db.js'

const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()')
    console.log('✅ Database connection successful!')
    console.log('🕐 Server time:', result.rows[0].now)
    
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)
    console.log('📊 Tables in database:', tables.rows.map(t => t.table_name))
    
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await pool.end()
  }
}

testConnection()