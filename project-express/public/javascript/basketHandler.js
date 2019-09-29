// Sends a post request to http://localhost:3000/basket
function postHandler() {
    let url = 'http://localhost:3000/basket';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Itt lehetne egy függvényt írni, ami betriggereli a kosarat...
        };
    };
    xhr.open('POST', url);
    xhr.send();
};


// Delete item from basket
function removeItem(productID) {
    let url = 'http://localhost:3000/basket';
    let xhr = new XMLHttpRequest();
    // Send delete request to server
    xhr.open('DELETE', url);

    xhr.onload = function () {
        if (this.status == 200) {
            // Delete product from UI
            document.querySelector(`#button${productID}`).parentElement.parentElement.remove();
            // A sum összeg nem változik, csak frissítésre, ide kéne írni vmi megoldást...
        }
    };

    // Send productID to server
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`prodID=${productID}`);
};