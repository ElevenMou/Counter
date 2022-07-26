
const btnInc = document.getElementById('btnInc');
const btnReset = document.getElementById('btnReset');
const btnDec = document.getElementById('btnDec');
const val = document.getElementById('value');
let value = 0;

btnDec.addEventListener('click', function (){
    value--;
    updateValue();
})

btnInc.addEventListener('click', function (){
    value++;
    updateValue();
})

btnReset.addEventListener('click', function (){
    value = 0;
    updateValue();
})

function updateValue() {
    val.textContent = value;
    if(value < 0) {
        val.style.color = 'red';
    } else if (value > 0){
        val.style.color = 'green';
    } else {
        val.style.color = 'black';
    }
}