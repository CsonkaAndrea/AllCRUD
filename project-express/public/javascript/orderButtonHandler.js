// If the user deleted all products from basket the ORDER button disabled
document.querySelector('.product-in-basket-to-order-table').addEventListener('click', tableChangeHandler, true);

function tableChangeHandler() {
    let tableRows = document.querySelectorAll('.product-in-basket-to-order');
    console.log(tableRows.length);
    if (tableRows.length == 1) {
        document.querySelector('.product-in-basket-to-order-button').setAttribute('disabled', 'disabled')
    };
};

// Order the basket, sends a post request to http://localhost:3005/myorders
function orderButtonHandler(basketID) {
    let url = 'http://localhost:3005/myorders';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`basketID=${basketID}`);
};

function redirectToMyOrders() {
    let url = 'http://localhost:3005/myorders';
    document.location.href = url;

};