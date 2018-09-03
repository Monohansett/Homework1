var userName = prompt ('Please, enter your name', '');
var hasNumber = /\d/;

if (hasNumber.test(userName)) {
    alert(userName.split('').reverse().join(''));
} else {
    alert(toWeirdCase(userName))
}

function toWeirdCase (s) {
    let str = s.toLowerCase().split('');

    for (var i=0; i<str.length; i++) {
        if(i % 2 == 0) {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('')
}

