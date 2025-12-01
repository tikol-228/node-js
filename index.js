import express from 'express';
import router from './route.js';

const PORT = 5000
const app = express()

app.get('/', (req, res) => {
    res.send('tikol')
})

app.get('/about', (req, res) => {
    res.send('about')  
})

// app.get('/user/:username', usernameController)
app.use('/user', router)

app.listen(PORT, () => {
    console.log('server is running')
})