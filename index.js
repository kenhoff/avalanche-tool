const express = require("express");
let app = express();

app.use(express.static(__dirname + "/build"))
app.use(express.static(__dirname))

app.listen(process.env.PORT || 1234, function() {
	console.log("Listening on " + (process.env.PORT || 1234) + "...");
})
