const CustomersBLL = require('./../bll/customers');
const AdminsBLL = require('./../bll/admins');

const customersBLL = new CustomersBLL();
const adminsBLL = new AdminsBLL();

module.exports = async (req, res, next) => {
    const validate = await customersBLL.tokenValidator(req.cookies.custvalidator);
    if (validate.valid) {
        res.locals.loggedcustomer = validate.customer;
        if (validate.customer.basket !== '{}') {
            res.locals.basketValue = Object.keys(JSON.parse(validate.customer.basket)).length;
        } else {
            res.locals.basketValue = 0;
        }
    } else {
        const validAdmin = await adminsBLL.adminTokenValidator(req.cookies.adminvalidator);
        if (validAdmin) {
            res.locals.loggedadmin = true;
        }
    }
    next();
};


// ezek a bllben vannak:

async tokenValidator(token) {
    const customers = await this.getCustomers();
    const validToken = { valid: false, customer: 'Not logged in' };
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].token === token) {
            validToken.valid = true;
            validToken.customer = customers[i];
            break;
        }
    }
    return validToken;
}

async validateEmail(email){
    const getAllCustomers = await this.getCustomers();
    let validationEmail = true
    for (let i = 0; i < getAllCustomers.length; i += 1) {
        if (getAllCustomers[i].email == email) {

            validationEmail = false;
            break;

        }
    }
    return validationEmail
}

//ezek az appban vannak:

const cookieParser = require('cookie-parser');

app.use(require('./modules/authentication'));