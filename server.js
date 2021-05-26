// Module and Package imports
const express = require('express');
const router = require('./src/router');

// App variables
const app = express()
app.use(express.json())

//Enable the router in the application
app.use('/api',router);

const PORT = 5001

//Initialize the server.
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})