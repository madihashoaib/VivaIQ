const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/api/test', (req, res) => {
  res.json({ message: 'VivaIQ server is running!' })
})

// Export for Vercel
module.exports = app

// Keep this for local dev only
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
}