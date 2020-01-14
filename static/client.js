var server = new WebSocket('ws://localhost:3001');

// we know what this does already
function serializeSocketMessage(type, payload) {
    return JSON.stringify({ type: type, payload: payload });
}

server.onerror = (error) => {
    console.log("An error has occured: " + error)
}

// we have to wrap our client-server communication
// in the callback of onopen since this is all asynchronous
// and connections don't open immediately
server.onopen = (ev) => {
    console.log("Server connection opened")

    // let's first listen for messages sent by the server

    server.onmessage = (message) => {
        // this is a copy/paste from the server

        var messageObject = JSON.parse(message.data);
        let { type, payload } = messageObject;

        // uncomment this line for easier debugging
        // console.log("Client got a message: \n" + "--->type: " + type +"\n--->payload: " + payload )

        // Again, here we define our own action types but this time
        // for server-to-client communication
        switch (type) {
            case "handshakeReply":
                console.log("Server says: " + payload);
                break;
            default:
                console.log("Got message with unknown type: " + messageObject)
        }
    

    // Now, this is a good place to set event listeners for client actions.
    // For example:
    var handShakeButton = document.getElementById("handshake-button");

    handShakeButton.onclick = () => {
        // send some message maybe?
        var handshakePayload = "Hi im Joe";    
        server.send(serializeSocketMessage("handshake", handshakePayload));
        }   
    }
    // write on...
}