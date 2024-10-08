var inputnum = document.getElementById('inputnum');
var outputnum = document.getElementById('outputnum');



inputnum.onkeyup = function() {
    if (Number(inputnum.value)) {

        outputnum.value = ' جنية '
        outputnum.value += inputnum.value * 0.025;
    } else if (inputnum.value == '') {
        outputnum.value = '';

    } else {
        inputnum.value = '';

    }

}
window.onload = function() {
    inputnum.focus()
}