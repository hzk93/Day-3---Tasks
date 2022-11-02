function evenOdd(){
    let number = document.getElementById('num1')
    let temp1 = parseInt(number.value);
    

    if(temp1 % 2 == 0){
        document.getElementById('result').innerHTML = 'The Entered Number is Even';
    }

    else if(temp1 % 2 == 1){
        document.getElementById('result').innerHTML = 'The Entered Number is Odd';
    }
    else{
        document.getElementById('result').innerHTML = 'Invalid Number Entered';
    }
}

function Clear(){
        document.getElementById('result').innerHTML = '';
}