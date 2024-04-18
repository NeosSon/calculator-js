
//I have to make it work

let clear = document.getElementById("C");

let one = document.getElementById("one");

let plus = document.getElementById("plus");

let equal = document.getElementById("equal");

let output = document.getElementById("output");
function add(firstNum, secondNum) {
    let first_num = parseInt(firstNum.textContent);
    let second_num = parseInt(secondNum.textContent);
    let actual_plus = parseInt(plus.textContent);
    return first_num + second_num; 
}

let result = add(one, one);

output.innerHTML = result;
console.log(result); //logs '2'