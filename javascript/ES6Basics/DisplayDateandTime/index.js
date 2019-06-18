var da = new Date();

setTimeout(function() {
    document.getElementById('a').innerHTML = da.toLocaleDateString();
    //$('#a').text=da.toLocaleDateString();
}, 1000);