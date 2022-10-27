//How to make a countDown Clock

//make an h1 tag with id countDown



//Set a timer
let counter = 10;


//declare a function
function timeout() {
    setTimeout(function(){
        document.getElementById('countDown').textContent = counter;
        counter--;
        if (counter < 0){
            // alert('Times run out');
            window.location.replace('nextPage.html');
        }
     timeout();   
    }, 1000);
}

//call function

timeout();
