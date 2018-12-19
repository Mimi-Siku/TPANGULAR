const express = require('express')
const http = require('http')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.get('/messages', function (req, res) {

	// Get the posts data from an external api
	http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
		let postsStr = '';

		resp.on('data', (chunk) => {
			postsStr += chunk;
		});

		resp.on('end', () => {
			let posts = JSON.parse(postsStr);

			// Add the date property to the data
			posts.forEach(function (post) {
				post['date'] = Date.now();
			})

			//To resolve an error
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

			res.json(posts);
		});

	}).on("error", (err) => {
		res.json("Error: " + err.message);
	});
})
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

