const celsuisTemp = [0, 10, 20, 30, 40];

const fahrenheitTemp = celsuisTemp.map(function (celsuis){
    return (celsuis * 9/5) + 32;
});

console.log(fahrenheitTemp);