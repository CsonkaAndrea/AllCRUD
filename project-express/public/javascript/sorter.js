document.querySelector('.order-select').addEventListener('change', function (){
    console.log(this);
    var dir = this.value;
    var url = location.href;
    if (url.indexOf('dir=') > -1) {
        url = url.split('?')[0];
    }
    if (dir === '1') {
        location.href = url + '?dir=asc';
    }
    else {
        location.href = url + '?dir=desc';
    }
});

