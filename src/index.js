const express = require('express')
const app = express()

//middlewares
app.use(express.json())                              //hace que mi app interprete cuando me envian datos en forma de json
app.use(express.urlencoded({ extended: false }))     //hace que podamos recibir datos a traves de fomrs html. Extended false solo acepta datos simples


//routes
app.use(require('./routes/index'))

app.listen(3000)
console.log("Server en puerto 3000")

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  })


    // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
  })