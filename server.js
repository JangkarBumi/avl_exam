const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req,res) => res.send('API Running'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
