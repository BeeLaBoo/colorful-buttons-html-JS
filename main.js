var button = document.getElementById('change-background');
button.addEventListener('click', function() {
    document.body.style.backgroundColor = 'tomato'
});

var button2 = document.getElementById('change-background2');
var button3 = document.getElementById('change-background3');
var button4 = document.getElementById('change-background4');


button2.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'orange'
});

button3.addEventListener('mouseenter', function() {
    document.body.style.backgroundColor = 'blue'
});

button4.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'yellow'
});