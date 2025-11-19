import express from 'express'
import cors from 'cors'
import db from './database'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/db', async (req, res) => {
  try {
    const result = await db.query('select now()')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

export default app
