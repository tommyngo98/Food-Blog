window.addEventListener('load', init, false);

function init() {

// Tic Tac Toe Spiel

    var x = "X";
    var o = "O";
    var i = x;

    var feld1 = document.getElementById('1');
    var feld2 = document.getElementById('2');
    var feld3 = document.getElementById('3');
    var feld4 = document.getElementById('4');
    var feld5 = document.getElementById('5');
    var feld6 = document.getElementById('6');
    var feld7 = document.getElementById('7');
    var feld8 = document.getElementById('8');
    var feld9 = document.getElementById('9');

    feld1.addEventListener('click', click);
    feld2.addEventListener('click', click);
    feld3.addEventListener('click', click);
    feld4.addEventListener('click', click);
    feld5.addEventListener('click', click);
    feld6.addEventListener('click', click);
    feld7.addEventListener('click', click);
    feld8.addEventListener('click', click);
    feld9.addEventListener('click', click);

    function click() {
        this.innerText = i;
        wechsel();
    }

    function wechsel() {
        if(i == x) {
            i = o;
        }
        else {
            i = x;
        }
    }

// Tic Tac Toe Reset

    var blank = " ";
    var reset = document.getElementById('reset');

    reset.addEventListener('click', gameReset);

    function gameReset() {
        feld1.innerText = blank;
        feld2.innerText = blank;
        feld3.innerText = blank;
        feld4.innerText = blank;
        feld5.innerText = blank;
        feld6.innerText = blank;
        feld7.innerText = blank;
        feld8.innerText = blank;
        feld9.innerText = blank;
    }

// Formular Überprüfung

    var name = document.getElementById('name');
    var submit = document.getElementById('submit');
    var regex = /[0-9]/;

    name.addEventListener('blur', checkName);

    function checkName() {
        if(regex.test(name.value)) {
            alert('Zahlen dürfen nicht eingegeben werden! Sorry!');
        }
    }
}