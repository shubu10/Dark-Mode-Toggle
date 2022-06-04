var toggled = false;

var toggle = document.getElementById("inner");
toggle.addEventListener('click', function () {

    if (toggled === false) {
        heading.style.color = "white";
        heading.innerHTML = ('DARK MODE')
        back.style.backgroundColor = "black";
        slot.style.justifyContent = "end";
        toggled = true;
    }
    else if (toggled ===true){
        heading.style.color = "black";
        heading.innerHTML = ('LIGHT MODE')
        back.style.backgroundColor = "white";
        slot.style.justifyContent = "start";
        toggled = false;
    }


});

var heading = document.getElementById('dark');
var back = document.body;
var slot = document.getElementById('outer');

