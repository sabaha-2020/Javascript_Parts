
const keyboard = document.querySelector('.keyboard')
/*
keyboard.addEventListener('keypress',function(event){
    console.log(`${event.key} A key is pressed`);
    
});

/*
keyboard.addEventListener('keydown',function(event){
    console.log(event);
 
});
*/

keyboard.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode === 82){
       alert('key is pressed'); 
    }
    else{
        alert('you cannot use ' + event.key);
    }
    
 
});



/*
keyboard.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode === 82 ){
      
        alert('you cannot use ' + event.key);
    }
    event.preventDefault()
 
});

*/

/*keyboard.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode === 82 || event.keyCode === 90 ){
      
        alert('you cannot use ' + event.key);
    }
    event.preventDefault()
 
});
*/

/*
keyboard.addEventListener('keyup',event =>{
console.log(event);


})*/



keyboard.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode === 82 || event.keyCode === 90 ){
      
        alert('you cannot use ' + event.key);
    }
    event.preventDefault()
 
});