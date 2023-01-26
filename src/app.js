const express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');

// ...

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
