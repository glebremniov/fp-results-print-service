const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Your API routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, this is your REST API!!!!!!');
});

app.get('/api/data', (req, res) => {
    res.json({message: 'Your data from the API'});
});

app.post('/api/data', (req, res) => {
    const {body} = req;
    res.json({message: 'Data received successfully', data: body});
});