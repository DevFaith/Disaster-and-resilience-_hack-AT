var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./src/routes/index');
var ussdRouter = require('./src/routes/ussd');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ussd', ussdRouter);

// error handler
app.use(function ({ httpStatus, error }, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error?.message ?? "Something went wrong";
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(httpStatus ?? 500).send(error);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});