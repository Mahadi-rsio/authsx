import express from 'express'
import cors from 'cors'
import { CreatePageConfig, loadPageConfig } from './controllers/page.controller.js'


const app = express()

app.use(express.json())
app.use(cors())

app.get('/', loadPageConfig)
app.post('/create', CreatePageConfig)

app.listen(3000, () => {
    console.log('server running');

})
