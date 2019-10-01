var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const productsAllRouter = require('./routes/productsAll');
const myOrdersRouter = require('./routes/myOrders');
const basketRouter = require('./routes/basket');
const registerCustomerRouter = require('./routes/registerCustomer');
const loginCustomerRouter = require('./routes/loginCustomer');
const theTeamRouter = require('./routes/theTeam');
const LoginDB = require('./modules/loginDB');
const loginAdminRouter = require('./routes/loginAdmin');
const myOrdersRouter = require('./routes/myOrders');

const loginDB = new LoginDB();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(async (req, res, next) => {
  const user = await loginDB.checkLogin(req);
  console.log(`appban user:: ${user}`);
  if (user) {
    req.user = user;
  }
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/products', productsAllRouter);
app.use('/myorders', myOrdersRouter);
app.use('/basket', basketRouter);
app.use('/register', registerCustomerRouter);
app.use('/login', loginCustomerRouter);
app.use('/theTeam', theTeamRouter);
app.use('/loginAdmin', loginAdminRouter);
app.use('/myorders', myOrdersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;