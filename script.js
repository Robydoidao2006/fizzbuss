
function display(){

    // Grabs user input
    let number = document.getElementById('userInput').value;

    // Loops throw numbers and calculate the result
    for (let i = 1; i < number; i++){
        if (i % 15 == 0) {
            document.getElementById('fizzbuzz').innerHTML += '<p>'+i+'</p>';
        }else if (i % 3 == 0) {
            document.getElementById('fizz').innerHTML += '<p>'+i+'</p>';
        }else if (i % 5 == 0){ 
            document.getElementById('buzz').innerHTML += '<p>'+i+'</p>';
        }else{
            document.getElementById('remaining').innerHTML += '<p>'+i+'</p>';
        }
        
    }

    // clears form
    $('#fizzBuzzForm')[0].reset();
    $('.fizzbussRow')[0].reset();
    
}// display ends
