/*const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/')
    res.setHeader('Content-Type', 'text/html');
    res.write
   // process.exit();
});

server.listen(3000);*/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


const albumRoutes = require('./routes/albums');
const categoryRoutes = require('./routes/categories');
const songRoutes = require('./routes/songs');
const userRoutes = require('./routes/users');

app.use('/albums', albumRoutes);
app.use('/categories', categoryRoutes);
app.use('/songs', songRoutes);
app.use('/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));