document.querySelector("#basketButton").addEventListener('click', basketHandler)

function basketHandler() {
    let url = 'http://localhost:3000/basket';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);

        }
    };
    xhr.open('GET', url);
    xhr.send();

}