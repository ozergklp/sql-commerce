import express from 'express'
const app = express()
const port = 4000
import router from './routes/router.js'
import cors from 'cors'

app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.get('/', async (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.error('Error handling the request:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/', router)
