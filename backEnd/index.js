const express = require('express');
const path = require('path');
const logger = require("./middleware/logger")

const app = express();

const PORT = process.env.PORT || 5000;



// app.get( '/' , (req, res) => {
//     res.sendFile(path.join(__dirname, 'public' , 'index.html'))
// })

//logger
app.use(logger)

//gets teh file from a specific folder and pass it
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


