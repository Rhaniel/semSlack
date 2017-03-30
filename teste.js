var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service.
var conversation = new ConversationV1({
  username: 'c7ce78ad-d9a0-4cf8-8304-a6c6e6b103e8', // replace with username from service key
  password: 'js3VWheVSHDp', // replace with password from service key
  path: { workspace_id: 'b8fc1e37-6d73-47fb-9463-9bab9403007c' }, // replace with workspace ID
  version_date: '2017-02-07'
});


console.log(conversation);
/*
// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }


  var soap = require('soap');
  var url = 'http://trbnetdsv.tribanco.com.br/Tribanco.KonySync.WS/service.asmx?wsdl';
  var args = {CodigoComercial: '2179'};
  soap.createClient(url, function(err, client) {
      client.Service.ServiceSoap.ValidaCarteira(args, function(err, result) {
          console.log(result);
      });
  });



  var endConversation = false;
    if(response.output.text[0] == "Até logo!"){
       console.log(response.output.text[0]);
      endConversation = true;
    }else if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse)
  }
}*/