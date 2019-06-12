let glob1 = 0;
let glob2 = 0;


function write1(a) {
    switch(a){
        case 1:
            document.getElementById('input').value += 1;
            break;
        case 2:
            document.getElementById('input').value += 2;
            break;
        case 3:
            document.getElementById('input').value += 3;
            break;
        case 4:
            document.getElementById('input').value += 4;
            break;
        case 'ce':
            document.getElementById('input').value = 0;
            break;
    }
}
