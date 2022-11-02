function IfElseComparison(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let temp1 = parseInt(num1.value);
    let temp2 = parseInt(num2.value);
    
    if(temp1 > temp2 ){
        document.getElementById('result').innerHTML = 'First Number is Greater than Second';
    } 
    else if(temp2 > temp1){
        document.getElementById('result').innerHTML = 'Second Number is Greater than First';
    }
    else if(temp2 === temp1){
        document.getElementById('result').innerHTML = 'Both Numbers Are Equal';
    }
    else{
        document.getElementById('result').innerHTML = 'Invalid Number';
    }   
}

function Clear(){
        document.getElementById('result').innerHTML = '';
}