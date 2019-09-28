// Sends a post request to http://localhost:3000/basket
function postHandler() {
    let url = 'http://localhost:3000/basket';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Itt lehetne egy függvényt írni, ami betriggereli a kosarat
        };
    };
    xhr.open('POST', url);
    xhr.send();
};


// Delete item from basket
function removeItem(productID) {
    let url = 'http://localhost:3000/basket';
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);

    xhr.onload = function () {
        if (this.status == 200) {
            document.querySelector(`#button${productID}`).parentElement.parentElement.remove()
        }
    };

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`prodID=${productID}`);
};