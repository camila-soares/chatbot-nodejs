
const express = require('express')
const app = express()
var path = require("path");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(3000, function(){
	console.log('app Listen at port 3000');
})
 
app.get('/mensagem', (req, res)	 =>  {
	var watson = require('watson-developer-cloud');

	var conversation = watson.conversation({
		username: '09404728-d6c6-455d-aa22-bcf8ff5ae15c',
		password: '7CgN38oyh7TX',
		version: 'v1',
		version_date: '2017-05-26'
	});
	console.log(req);

	var context = {};

	conversation.message({
		workspace_id: '42893f0a-6c0e-4b66-8e30-525058a4322e',
		input: {'text': req.query.texto},
		context: context
	}, function(err, response) {
		if(err){
			console.log('error:', err);
			res.send(err);
		}
		else{
			res.send({'resposta': response.output.text[0]});
			//console.log(JSON.stringify(response, null, 2));
		}
	
	});
		
});