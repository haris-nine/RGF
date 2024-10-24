
var button = document.getElementById('right');
button.onclick = function () {
    document.getElementById('box-container').scrollLeft += 200;
};

var back = document.getElementById('left');
back.onclick = function () {
    document.getElementById('box-container').scrollLeft -= 200;
};
