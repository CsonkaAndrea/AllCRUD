const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const productsAllRouter = require('./routes/productsAll');
const myOrdersRouter = require('./routes/myOrders');
const basketRouter = require('./routes/basket');
const registerCustomerRouter = require('./routes/registerCustomer');
const loginCustomerRouter = require('./routes/loginCustomer');
const theTeamRouter = require('./routes/theTeam');
const loginAdminRouter = require('./routes/loginAdmin');
const adminRouter = require('./routes/admin');
const pricingRouter = require('./routes/pricing');
const shippingRouter = require('./routes/shipping');
const checkLoginMW = require('./middleware/checkLogin');
const basketCounterMW = require('./middleware/basketCounter');

const app = express();

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

app.use('/', checkLoginMW);
app.use('/', basketCounterMW);
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
app.use('/admin', adminRouter);
app.use('/pricing', pricingRouter);
app.use('/shipping', shippingRouter);

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