
function show(){
//creating a xmlhttpRequest object:

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload  =function(){

    const myobj = JSON.parse(this.responseText)



    
    //code to process the response
};
xmlhttp.open("GET","https://dummyjson.com/users")
xmlhttp.send();


}