const app = require('./app');

var port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

const server = app.listen(port, () => {
  console.log('App started at port ' + port);
});