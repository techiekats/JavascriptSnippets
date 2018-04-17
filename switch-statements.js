function printRomanNumber (number) {
    if (number == '1') {
        console.log('I')
    }
    else if (number == 5) {
        console.log('V');
    }
}

function printRomanNumberSwitch (number) {
    switch (number) {
        case '1': console.log('I'); break;
        case 5: console.log('V');   break;
        default: console.log(`No case matches ${number}`);
    }
}

console.log('%c Using the if method:', 'color:#bada55');
printRomanNumber(1); //prints I
printRomanNumber('5'); //prints V

console.log('%c Using the switch method:', 'color:#bada55');
printRomanNumberSwitch(1);
printRomanNumberSwitch('5'); 