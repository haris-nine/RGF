
var button = document.getElementById('right');
button.onclick = function () {
    document.getElementById('box-container').scrollLeft += 300;
};

var back = document.getElementById('left');
back.onclick = function () {
    document.getElementById('box-container').scrollLeft -= 300;
};

var ibutton = document.getElementById('i-right');
ibutton.onclick = function () {
    document.getElementById('i-cards').scrollLeft += 300;
};

var iback = document.getElementById('i-left');
iback.onclick = function () {
    document.getElementById('i-cards').scrollLeft -= 300;
};
