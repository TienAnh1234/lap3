var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//khai báo tên và đường dẫn của router
var fptRouter = require('./routes/fpt');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// khai báo url của router
app.use('/fpt',fptRouter); 





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// mặc định chạy ở cổng 3000
// nếu muốn đổi port của web server, ta gõ
//app.listen(process.env.PORT || 3001) // dùng để đẩy lên render để chạy online web


app.listen(process.env.PORT || 3000) // dùng để đẩy lên render để chạy online web

module.exports = app;
