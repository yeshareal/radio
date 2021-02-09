var express = require("express");
var http = require("http");
var { get } = require("snekfetch");
var app = express();

// Ping the app
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => res.sendStatus(200));

// Request listener
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const axios = require("axios");
function uptime() {
  setInterval(() => {
    axios.get("https://lightning-flying-quail.glitch.me");
  }, 6000);
}
uptime();
