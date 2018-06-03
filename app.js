
const express = require('express')
const app = express()
var path = require("path");
const chatRoutes = require('./routes/chat')
const bodyParser = require('body-parser')

const serverPort = process.env.PORT || 3000
	
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/chat', chatRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(3000, function(){
	console.log('app Listen at port:' serverPort);
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

		
});