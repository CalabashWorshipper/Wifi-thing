var inputthing = document.getElementById('inputthing');
var errorr = document.getElementById('error_message')
//inputthing.addEventListener('blur',function(){
    //TheFunction();
//});
inputthing.addEventListener("focus",function(){
    inputthing.value = ""
})

inputthing.addEventListener('keypress',function(e){
    if (e.key == 'Enter'){
        TheFunction()
    } 
})

function TheFunction(){
    //alert(inputthing.value);
    inputthing.blur();
    inputthing.value = 'Password:'
    errorr.innerHTML = "403 - Wrong Password."


};