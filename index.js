//N1
let num = 100;
if (num < 50){
    console.log('ნაკლებია 50-ზე')
}
else if (num > 20){
    console.log ('მეტია 20-ზე')
}
else{
    console.log('შეცდომა')
}

//ternary operator
let nums = 100 < 50 ? 'ნაკლებია 50-ზე': (num > 20 ? 'მეტია 20-ზე' : 'შეცდომაა')
console.log(nums);


//N2
let person = 'მარიამ';
if (person = 'მარიამ'){
    console.log('true')
}
else {
    console.log('false')
}


//N3
let mariam = 'მარიამ';
switch(mariam){
    case mariam:
        console.log('true')
        break;
    default:
        console.log('false')
        break;
}

//N4
let random = 'ნებისმიერი'
console.log(typeof random)

//N5
let number = 10
console.log (String(number))
