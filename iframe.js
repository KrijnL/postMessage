/**
 * This code recieves messages on the iframe, and sends back a response
 * 
 */
const ACTIONS = ["action"]

//Listen for the "message" event
window.addEventListener("message", handleMessage, false)

function handleMessage(event){
    //Check the origin of the sent message
    if(event.origin !== "https://example.com"){
        console.log("My mummy says I'm not allowed to talk to strangers")
        return
    }

    //HANDLE EVENT HERE
    var data = JSON.parse(event.data);

    //Check the syntax of the sent message
    if(!data.action || ACTIONS.indexOf(data.action) === -1){
        console.log("Whoops, looks like that action isn't valid!")
        return
    }

    //
    //Do something with the data here, making sure to sanitize it if reflecting to the DOM.
    //

    //Send a message back using event.source, providing event.origin as the target.
    event.source.postMessage("here's your reply!", event.origin);

}

