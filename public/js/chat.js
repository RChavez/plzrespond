
var socket = io.connect();

$(function() {

    $("#chatControls").hide();
    $("#pseudoSet").click(function() {
    	setPseudo()
    });

    $("#submit").click(function() {
    	sentMessage();
    	console.log("message sent");
    });
   
});

socket.on('connect', function() {
	console.log('connected');
});

function addMessage(msg, pseudo) {
	console.log("appending " + msg);
    $("#chatEntries").append('<div class="message"><p>' + pseudo + ' : ' + msg + '</p></div>');
}

function sentMessage() {
	console.log("message sent");
    if ($('#messageInput').val() != "") 
    {
        socket.emit('message', $('#messageInput').val());
        addMessage($('#messageInput').val(), "Me", new Date().toISOString(), true);
        $('#messageInput').val('');
    }
}

function setPseudo() {
	console.log("Setting pseudo");
    if ($("#pseudoInput").val() != "")
    {
        socket.emit('setPseudo', $("#pseudoInput").val());
        $('#chatControls').show();
        $('#pseudoInput').hide();
        $('#pseudoSet').hide();
    }
}

socket.on('message', function(data) {
    addMessage(data['message'], data['pseudo']);
});