const express = require('express')
const app = express()
const port = 1728

app.get('/', (req, res) => res.send('Hare Krishna'))

app.listen(port, () => console.log('🧘‍♂️🧘‍♂️ Bhakti Buddy is listening on port: ' + port + ' 🧘‍♂️🧘‍♂️'))