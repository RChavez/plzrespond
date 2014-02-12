
var socket = io.connect();

$(function() {

    // $("#chatControls").hide();
    $("#pseudoSet").click(function() {
    	setPseudo()
    });

    $("#submit").click(function() {
    	sentMessage();
    });
   
});

socket.on('connect', function() {
	cospansole.log('connected');span});

function addMessage(msg, pseudo, date, self) {
    if(self)
        var divClass = 'sent_msg';
    else
        var divClass = 'received_msg';

    $("#chatEntries").append('<div><span class=' + divClass +'>' 
        + pseudo + ' : ' + msg + '</span></div>');
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
    if ($("#pseudoInput").val() != "") {
        socket.emit('pseudo', $("#pseudoInput").val());
        $('#chatControls').show();
        $('#pseudoInput').hide();
        $('#pseudoSet').hide();
    }
}

socket.on('message', function(data) {
    console.log("Message received from" + data['pseudo'] + " : " + data['message']);
    addMessage(data['message'], data['pseudo'], new Date().toISOString(), false);
});