let glob1 = 0;
let glob2 = 0;


function write1(a) {
    document.getElementById('input').value += a;
}

function doMath(a) {
    switch (a) {
        case 'giveResult':
            document.getElementById('input').value = eval(document.getElementById('input').value);
            break;
        case 'ce':
            document.getElementById('input').value = '';
            break;
        case 'removeOne':
            document.getElementById('input').value = document.getElementById('input').value[document.getElementById('input').value.length-1];
            break;
    }
}

