

function rgbToHex() {
    //declearing the input variables an
    let red =parseInt(document.querySelector('[data-red]').value);
    let green=parseInt(document.querySelector('[data-green]').value);
    let blue= parseInt(document.querySelector('[data-blue]').value);
    //function to convert color values to hex
    function toHex(color) {
        let a = color.toString(16);
        return a.length == 1 ? "0" + a : a;
    }
    //declearing varibles and setting them to the conversion function
    let redInput = toHex(red);
    let greenInput = toHex(green);
    let blueInput = toHex(blue);
    hex.value = "#" + redInput + greenInput + blueInput;
}
//declearing the input variables
let hex= document.querySelector('[data-hex]');
let red =document.querySelector('[data-red]');
let green=document.querySelector('[data-green]');
let blue= document.querySelector('[data-blue]');

btn1 = document.querySelector('[data-btn1]')
btn1.addEventListener('click', rgbToHex);

btn2 = document.querySelector('[data-btn2]')
btn2.addEventListener('click', function () {
    hex.value= "";
    red.value="";
    green.value="";
    blue.value="";
});
