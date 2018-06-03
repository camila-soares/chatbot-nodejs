const express = require('express');
const vcap = require('../util/vcapService');
const router = express.Router();
const watson = require('watson-developer-cloud');


router.get('/', (req, res) => {
	res.sendFile('views/chat.html',{root: __dirname.replace('/routes', '')});
});

router.post('mensagem', req, res) => {
	
	conversation.message({
		'texto': req.body.mensagem,
		'context': JSON.parse(req.body.context)

	}, function(err, response){
		if(err){
			console.error(err);
			res.send(err);
		}
		else {
			res.send({ 'response': response.output.text[0], 'context': response.context});
		}
	
	})

}