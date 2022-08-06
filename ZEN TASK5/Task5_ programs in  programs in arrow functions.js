//1.Print odd numbers in an array
let oddNumbers = [1, 13, 25, 37,49]
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}


//2.Convert all the strings to title caps in a string array
titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
}          



//3.Sum of all numbers in an array
sum = (array)=>{
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
        sum = sum + array[i];
    }
    return sum;
}

   
//4.Return all the prime numbers in an array
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}
     
//5.Return all the palindromes in an array
function palindome (str) {
    var len = str.length;
    var mid = math.floor (len/2);
    for (vari=0;i<mid;i++);
    if(str[i] !==str[len-1-i]) {
        return false;
    }
    return true;
}
