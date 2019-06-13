let glob1 = 0;
let glob2 = 0;


function write1(a) {
    document.getElementById('input').value += a;
}

function doMath(a) {
    switch (a) {
        case 'giveResult':
            glob1 = document.getElementById('input').value;
            document.getElementById('input').value = eval(document.getElementById('input').value);
            break;
        case 'ce':
            document.getElementById('input').value = '';
            break;
        case 'removeOne':
            document.getElementById('input').value = document.getElementById('input').value.substring(0, document.getElementById('input').value.length-1)
            break;
        case 'revert':
            document.getElementById('input').value = glob1;
            break;
    }
}

//проверка на нажатие клавиш + блок ввода любых букв
document.onkeypress = function(event){
    if (event.keyCode === 13){
        doMath('giveResult');
    }
    else if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
    return false;
}


