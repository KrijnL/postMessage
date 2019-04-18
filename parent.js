/**
 * This code is used on the parent window to send and recieve messages from an iframe
 * 
 */
var iframe = document.getElementById("iframe")

 //Wait until iframe loads before sending messages
iframe.onload = sendMessages

//Send a message using postMessage
function sendMessages(){
    var message = {
        action: "action",
        data: "data"
    }

    //postMessage is a function defined on the window object of an iframe
    let win = iframe.contentWindow;
    //You can also get the iframe from the window.frames object if you give it a name attribute
    win = window.frames.iframe.contentWindow;
    
    //The data that is sent needs to be a string for compatibility with IE
    //Syntax is postMessage(data, targetOrigin)
    win.postMessage(JSON.stringify(message), "https://example.com")
}