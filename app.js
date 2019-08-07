require('newrelic');

const express = require('express')
const app = express()
// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
